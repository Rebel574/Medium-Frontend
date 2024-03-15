import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Footer from "../components/footer";
import Skeleton from "../components/skeleton";
import useBlogs from "../hooks/index";


function Blog() {
  const { loading, blogs } = useBlogs();

  if(loading){
    return <div className=" flex flex-col items-center justify-center">
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
    </div>
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">{
          blogs.map(blog=>{
            return <BlogCard 
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            key={blog.id}
            id={blog.id}
            publishedDate="11-10-2004"/>
          })
        }
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Blog;
