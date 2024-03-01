import { sql } from "@vercel/postgres";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function MovieReviews() {
  const reviews = await sql`
    SELECT * FROM reviews;`;

  revalidatePath("/movie-reviews");

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.rows.map((review) => (
        <div key={review.id}>
          <h2>{review.username}</h2>
          <h3>{review.movie}</h3>
          <h3>{review.release}</h3>

          <Link
            href={`/movie-reviews/${review.id}`}
            className="text-emerald-500"
          >
            Read Review
          </Link>
        </div>
      ))}
    </div>
  );
}
