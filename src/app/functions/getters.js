import { sql } from "@vercel/postgres";

export async function genreGetter() {
  const genres = (await sql`SELECT * from genres`).rows;
  return genres;
}
