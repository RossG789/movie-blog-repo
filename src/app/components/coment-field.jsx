import { sql } from "@vercel/postgres";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export default async function CommentField({ id }) {
  const comments = await sql`SELECT * FROM comments WHERE review_id =${id}`;
  // console.log({ params });
  // console.log(post);

  return (
    <div>
      <h1 className="text-base mt-6">See What Others Have Said</h1>
      {comments.rows.map((comment) => (
        <div
          className="mt-6 p-2 h-12 text-left text-base text-gray-700 bg-gray-200 rounded-lg"
          key={comment.id}
        >
          <div>
            <p>Anon said:"{comment.comment_content}"</p>
          </div>
        </div>
      ))}
    </div>
  );
}
