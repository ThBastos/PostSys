import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import MoreViews from "./views/MoreViews";
import Login from "./views/Login";
import AdminPosts from "./views/admin/AdminPosts";
import AdminOne from "./views/admin/AdminOne";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="mais-visualizados" element={<MoreViews />} />
          <Route path="entrar" element={<Login />} />
          <Route path="admin/posts" element={<AdminPosts />} />
          <Route path="admin/posts/one" element={<AdminOne />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
