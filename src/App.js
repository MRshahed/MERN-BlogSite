import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Posts from "./component/posts/Posts";
import Page from "./component/posts/page/Page";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        {/* <Home />
        <Posts /> */}
        <Page />
      </main>
    </>
  );
};

export default App;
