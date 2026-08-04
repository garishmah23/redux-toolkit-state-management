import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "./postsSlice";

function PostList() {

  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  return (
    <div className="card">

      <h2>All Posts</h2>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>

            <h3>{post.title}</h3>

            <p>{post.content}</p>

            <small>
              Platform: <b>{post.platform}</b>
            </small>

            <br />

            <button
              className="deleteBtn"
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete
            </button>

          </div>
        ))
      )}

    </div>
  );
}

export default PostList;