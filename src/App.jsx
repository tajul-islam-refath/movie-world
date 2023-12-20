import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  setListMovies,
  setWatchLists,
} from "./redux/features/userSlice";
import userApi from "./api/modules/user.api";
import movieApi from "./api/modules/movies.api";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const authUser = async () => {
    const { response, err } = await userApi.getInfo();

    if (response) dispatch(setUser(response));
    if (err) dispatch(setUser(null));
  };

  const getMovies = async () => {
    const { response, err } = await movieApi.getAll();

    if (response) dispatch(setListMovies(response.data));
    if (err) console.log(err);
  };

  const getUserWatchList = async () => {
    const { response, err } = await movieApi.getUserWatchList();

    if (response) dispatch(setWatchLists(response.data));
    if (err) console.log(err);
  };

  useEffect(() => {
    getMovies();
    authUser();
    getUserWatchList();
  }, [dispatch]);

  return (
    <>
      {/* config toastify */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
