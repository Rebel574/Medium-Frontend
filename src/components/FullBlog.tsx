import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

interface Blog {
  id: string;
  content: string;
  title: string;
  author: {
    name: string;
  };
}

function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-10 w-full pt-12 max-w-screen-xl">
          <div className="md:col-span-8">
            <div className="text-3xl md:text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd December 2024</div>
            <div className="pt-4" style={{ maxHeight: "400px", overflowY: "auto" }}>
              {/* Render content using <pre> element */}
              <pre>{blog.content}</pre>
            </div>
          </div>
          <div className="md:col-span-4 mt-8 md:mt-0">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex items-center mt-4">
              <div className="pr-4 flex-shrink-0">
                <Avatar name={blog.author.name} size="big" />
              </div>
              <div>
                <div className="text-xl font-bold">{blog.author.name}</div>
                <div className="pt-2 text-slate-500">Random Phrases</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
