import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className=" py-6 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative">
          <span className="text-blue-500 font-bold uppercase">Movie </span>
          <br />
          <span className="absolute right-0 text-[10px]">World</span>
        </div>
        <div className="flex gap-8 text-[14px] font-semibold">
          <p>Get Pro</p>
          <p>Movies</p>
          <p>Watch List</p>
          <Link
            to="/login"
            className="py-1 rounded-full px-8 bg-blue-600 text-center">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
