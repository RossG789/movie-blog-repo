import { sql } from "@vercel/postgres";

export default async function PostPage({ params }) {
  const [post] = (await sql`SELECT * FROM posts WHERE id =${params.id}`).rows;

  console.log({ params });
  console.log(post);

  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
