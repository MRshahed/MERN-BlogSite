import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Sidebar from "./component/sidebar/Sidebar";
import Posts from "./component/posts/Posts";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Posts />
      </main>
    </>
  );
};

export default App;
