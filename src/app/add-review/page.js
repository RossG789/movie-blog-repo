import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import Submit from "../components/SubmitReview";

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

  return (
    <div className="">
      <h2 className="text-xl">Add Your Review</h2>

      <form action={handleReview} className="">
        <label className="">Your Name</label>
        <input
          className="text-gray-700"
          name="username"
          placeholder="Your Name"
        />

        <label className="">Movie Name</label>
        <input className="text-gray-700" name="movie" placeholder="Movie" />

        <label className="">Year Released</label>
        <input
          className="text-gray-700"
          name="release"
          placeholder="Release Date"
        />

        <label className="">Image URL</label>
        <input
          className="text-gray-700"
          name="imgUrl"
          placeholder="Image URL"
        />

        <label className="">Your Review</label>
        <input className="text-gray-700" name="review" placeholder="Review" />

        <Submit />

        {/* <label htmlFor="genres" className="">
          Select genres (hold shift to select multiple)
        </label> */}
        {/* <select name="genres" id="genres" multiple>
          {genres.map((genre) => (
            <option value={genre.id}>{genre.name}</option>
          ))}
        </select> */}
        {/* <SubmitButton thing="book" /> */}
      </form>
    </div>
  );
}
