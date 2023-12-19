import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      {/* sidenav  */}
      <nav className="w-[200px] h-[100vh] bg-black fixed left-0 top-0 overflow-x-hidden py-8 text-white ">
        <Link to="/">
          <h1 className="font-bold uppercase text-center text-[2rem]">
            <span className="text-blue-500 ">Movie </span>
            <span className="text-[10px] text-white">World</span>
          </h1>
        </Link>

        <ul className="mt-3 flex flex-col gap-2">
          <li>
            <Link
              to="/admin"
              className="block hover:bg-slate-100 hover:text-black cursor-pointer py-1 px-2 text-[18px] uppercase">
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="block hover:bg-slate-100 hover:text-black cursor-pointer py-1 px-2 text-[18px] uppercase">
              Users
            </Link>
          </li>
        </ul>
      </nav>
      {/* main  */}
      <main className="ml-[200px] bg-slate-200 w-auto min-h-[100vh] p-3">
        <div className=" bg-white h-full rounded-lg shadow-sm p-3">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
