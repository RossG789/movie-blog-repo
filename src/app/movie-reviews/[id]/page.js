import Link from "next/link";
import Image from "next/image";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import CommentForm from "@/app/components/comment-form";
import CommentField from "@/app/components/coment-field";

export default async function PostPage({ params }) {
  const [review] = (await sql`SELECT * FROM reviews WHERE id =${params.id}`)
    .rows;

  // console.log({ params });
  // console.log(post);

  revalidatePath("/movie-reviews/[id]", "page");

  return (
    <div className="w-full text-center p-8 text-3xl flex flex-col items-center">
      <h3>{review.username}&apos;s Review</h3>
      <h2>{review.movie}</h2>
      <h2>{review.release}</h2>
      <Image
        className="h-96 w-64 object-cover rounded-lg"
        src={review.imgurl}
        height={150}
        width={150}
        alt="An image that says Muvie"
      />
      <p className="mt-6 p-2 w-96 h-20 text-start text-base bg-stone-600 rounded-lg">
        {review.username} said: "{review.review}"
      </p>

      <CommentForm id={params.id} />

      <CommentField id={params.id} />

      <Link href={`/movie-reviews`} className="text-emerald-500">
        Back to the reviews
      </Link>
    </div>
  );
}
