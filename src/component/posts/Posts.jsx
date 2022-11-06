import Sidebar from "../sidebar/Sidebar";
import Post from "./Post";
import "./Posts.css";

const Posts = () => {
  return (
    <section className="posts" id="posts">
      <div className="posts__container">
        <Post />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>
    </section>
  );
};

export default Posts;
