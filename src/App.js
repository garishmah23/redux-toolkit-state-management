import "./App.css";
import AddPost from "./components/AddPost";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <div className="container">

      <h1>Redux Toolkit State Management</h1>

      <AddPost />

      <PostList />

    </div>
  );
}

export default App;