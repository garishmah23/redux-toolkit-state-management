import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

function AddPost() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("LinkedIn");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    dispatch(
      addPost({
        id: Date.now(),
        title,
        content,
        platform,
      })
    );

    setTitle("");
    setContent("");
    setPlatform("LinkedIn");
  };

  return (
    <div className="card">
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write something..."
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option>LinkedIn</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>X</option>
        </select>

        <button>Add Post</button>

      </form>
    </div>
  );
}

export default AddPost;