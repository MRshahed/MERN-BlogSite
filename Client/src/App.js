import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Posts from "./component/posts/Posts";
import Page from "./component/posts/page/Page";
import Write from "./component/write/Write";
import Settings from "./component/settings/Settings";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Error from "./component/error/Error";
import Update from "./component/posts/update/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { Context } from "./component/context/Context";

const App = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="post/:postId" element={<Page />} />
        <Route path="posts" element={<Posts />} />
        <Route path="write" element={user ? <Write /> : <Login />} />
        <Route
          path="settings/:userID"
          element={user ? <Settings /> : <Login />}
        />
        <Route path="update/:postID" element={user ? <Update /> : <Login />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
