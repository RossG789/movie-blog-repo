import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import Submit from "../components/SubmitReview";
import { genreGetter } from "../functions/getters";

export default async function Page() {
  async function handleReview(formData) {
    "use server";

    const userName = formData.get("username");
    const movie = formData.get("movie");
    const release = formData.get("release");
    const imgUrl = formData.get("imgUrl");
    const review = formData.get("review");

    const reviewResult = (
      await sql`INSERT INTO reviews (username, movie, release, imgUrl, review) VALUES (${userName}, ${movie}, ${release}, ${imgUrl}, ${review})`
    ).rows;

    redirect("/movie-reviews");
  }

  let genres = await genreGetter();

  return (
    <div>
      <div className="mt-6 mb-6 flex justify-center">
        <h2 className="text-xl">Add Your Review</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-96 h-full flex justify-center bg-teal-700 rounded-lg">
          <form
            action={handleReview}
            className=" w-80 flex flex-col justify-center"
          >
            <label className="text-slate-100 mt-2 mb-2">Your Name</label>
            <input
              className="px-1 rounded text-gray-700"
              name="username"
              placeholder="Name"
            />

            <label className="text-slate-100 mt-2 mb-2">Movie Name</label>
            <input
              className="px-1 rounded text-gray-700"
              name="movie"
              placeholder="Movie"
            />

            <label className="text-slate-100 mt-2 mb-2">Year Released</label>
            <input
              className="px-1 rounded text-gray-700"
              name="release"
              placeholder="eg. 2014"
            />

            <label className="text-slate-100 mt-2 mb-2">Image URL</label>
            <input
              className="px-1 rounded text-gray-700"
              name="imgUrl"
              placeholder="http:"
            />

            <label className="text-slate-100 mt-2 mb-2">Your Review</label>
            <input
              className="px-1 rounded text-gray-700"
              name="review"
              placeholder="Review"
            />

            <label
              htmlFor=" genres"
              className="rounded text-slate-100 mt-2 mb-2 "
            >
              Select genre.
            </label>

            <select className="text-gray-700 " name="genres" id="genres">
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.genre_name}
                </option>
              ))}
            </select>

            <Submit />
          </form>
        </div>
      </div>
    </div>
  );
}
