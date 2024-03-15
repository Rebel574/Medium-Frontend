import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}
function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
}

export default useBlogs;
