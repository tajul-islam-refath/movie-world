import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import { avgRating, hasWatchList } from "../../utils/utiles";
import movieApi from "../../api/modules/movies.api";
import { addWatchList, removeWatchList } from "../../redux/features/userSlice";

const MovieCard = ({ movie }) => {
  const watchList = useSelector((state) => state.user.watchList);
  const isWatchdList = hasWatchList(watchList, movie._id);
  const dispatch = useDispatch();

  const add = async (movie) => {
    const { response, err } = await movieApi.addToWatchList({
      movieId: movie._id,
    });

    if (response) {
      toast.success("Added to watchlist!");
      dispatch(addWatchList(movie));
    }
    if (err) {
      console.log(err);
      toast.error("Failed to add watchlist!");
    }
  };

  const remove = async (movie) => {
    const { response, err } = await movieApi.removeFroWatchList(movie._id);

    if (response) {
      toast.success("Remove from watchlist!");
      dispatch(removeWatchList({ movieId: movie._id }));
    }
    if (err) {
      console.log(err);
      toast.error("Failed to remove watchlist!");
    }
  };

  return (
    <>
      <div className="w-full h-full overflow-hidden rounded-lg bg-gray-900">
        <img
          src={movie?.image}
          alt=""
          className="w-full h-[160px] object-cover"
        />
        <div className="w-full font-semibold p-3">
          <h3 className="text-white text-left uppercase">{movie?.title}</h3>
          <span className="flex items-center gap-2 cursor-pointer text-white ">
            <FaStar className="inline-block text-yellow-400 " />{" "}
            {avgRating(movie?.ratings)}({movie?.ratings?.length})
          </span>
          <button
            className=" flex flex-row items-center gap-3 w-full bg-blue-600 text-[12px] uppercase text-white  rounded-full py-1 px-6 mt-2"
            onClick={() => (isWatchdList ? remove(movie) : add(movie))}>
            {isWatchdList ? <FaCheck /> : <IoAdd />}
            Watch List
          </button>
          <Link
            to={`/movies/${movie?._id}`}
            className="flex items-center gap-2 cursor-pointer text-[12px] mt-2 text-white ">
            <MdOutlineSlowMotionVideo className="inline-block text-yellow-400 " />{" "}
            Trailer
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
