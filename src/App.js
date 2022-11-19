import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Posts from "./component/posts/Posts";
import Page from "./component/posts/page/Page";
import Write from "./component/write/Write";
import Task from "./component/write/Task";
import Settings from "./component/settings/Settings";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Posts />
        <Page />
        <Write />
        <Settings />
      </main>
    </>
  );
};

export default App;
