import Link from "next/link";
import Image from "next/image";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import CommentForm from "@/app/components/comment-form";

export default async function PostPage({ params }) {
  const [review] = (await sql`SELECT * FROM reviews WHERE id =${params.id}`)
    .rows;

  // console.log({ params });
  // console.log(post);

  revalidatePath("/movie-reviews/[id]", "page");

  return (
    <div>
      <h1>Reviews</h1>
      <h3>{review.username}&apos;s Review</h3>
      <h2>{review.movie}</h2>
      <h2>{review.release}</h2>
      <Image
        className=" rounded-lg"
        src={review.imgurl}
        height={150}
        width={150}
        alt="An image that says Muvie"
      />
      <p>{review.review}</p>

      <CommentForm id={params.id} />

      <Link href={`/movie-reviews`} className="text-emerald-500">
        Back to the reviews
      </Link>
    </div>
  );
}
