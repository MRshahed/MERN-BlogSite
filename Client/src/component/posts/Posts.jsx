import Sidebar from "../sidebar/Sidebar";
import Post from "./Post";
import "./Posts.css";

const Posts = ({ Posts }) => {
  return (
    <section className="posts" id="posts">
      <div className="posts__container">
        {Posts.map((p) => (
          <Post post={p} key={p._id} />
        ))}
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>
    </section>
  );
};

export default Posts;
