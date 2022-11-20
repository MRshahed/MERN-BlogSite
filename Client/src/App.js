import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Posts from "./component/posts/Posts";
import Page from "./component/posts/page/Page";
import Write from "./component/write/Write";
import Settings from "./component/settings/Settings";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Error from "./component/error/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="post" element={<Page />} />
        <Route path="posts" element={<Posts />} />
        <Route path="write" element={<Write />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
