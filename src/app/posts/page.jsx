import { sql } from "@vercel/postgres";

export default async function PostsPage() {
  const posts = await sql`
    SELECT * FROM posts;`;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
