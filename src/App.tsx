import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import BlogId from "./pages/BlogId";
import Publish from "./pages/Publish";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/blog/:id" element={<BlogId />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
