import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";
import { toast } from "react-toastify";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const logOut = () => {
    dispatch(setUser(null));
    navigate("/");
    toast.success("Logout successfully!");
  };

  return (
    <nav className=" py-6 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative">
          <span className="text-blue-500 font-bold uppercase">Movie </span>
          <br />
          <span className="absolute right-0 text-[10px]">World</span>
        </div>
        <div className="flex gap-8 text-[14px] font-semibold">
          <p className="cursor-pointer text-orange-400">Get Pro</p>
          <p className="cursor-pointer">Movies</p>
          <p className="cursor-pointer">Watch List</p>
          {user && (
            <>
              <p>{user?.data?.username}</p>
              <p
                className="py-1 rounded-full px-8 bg-red-600 text-center cursor-pointer"
                onClick={() => logOut()}>
                Logout
              </p>
            </>
          )}
          {!user && (
            <Link
              to="/login"
              className="py-1 rounded-full px-8 bg-blue-600 text-center">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
