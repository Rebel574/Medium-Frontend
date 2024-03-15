import FullBlog from "../components/FullBlog";
import Skeleton from "../components/skeleton";
import useBlog from "../hooks/getBlog";
import { useParams } from "react-router-dom";

function BlogId() {
  const { id } = useParams();
  console.log(id);
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  return blog ? (
    <div>
      <FullBlog blog={blog} />
    </div>
  ) : null;
}

export default BlogId;
