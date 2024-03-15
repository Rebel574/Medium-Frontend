import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blog"}
        className="flex flex-col justify-center cursor-pointer"
      >
        Medium
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="m text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            New
          </button>
        </Link>
        <Avatar size="big" name="Rohit" ></Avatar>
      </div>
    </div>
  );
}

export default Appbar;
