import SubmitCommentBtn from "./submit-comment-btn";
import { sql } from "@vercel/postgres";

export default function CommentForm({ id }) {
  async function handleComment(formData) {
    "use server";

    const comment = formData.get("comment");

    const commentResult = (
      await sql`INSERT INTO comments (comment_content, review_id) VALUES (${comment}, ${id})`
    ).rows;
  }

  console.log(id);

  return (
    <div>
      <form action={handleComment} className="">
        <label className="">Leave Comment</label>
        <input
          className="text-gray-700"
          name="comment"
          placeholder="Leave A Comment"
        />

        <SubmitCommentBtn />

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
