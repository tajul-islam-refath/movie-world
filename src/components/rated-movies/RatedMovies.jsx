import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import img from "../../assets/hero.jpg";
import { FaStar } from "react-icons/fa";
import { avgRating } from "../../utils/utiles";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import movieApi from "../../api/modules/movies.api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addWatchList } from "../../redux/features/userSlice";
import MovieCard from "../card/MovieCard";

const RatedMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.user.movies);

  const addToWatchList = async (movie) => {
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

  return (
    <section className="w-full min-h-[100%] bg-black py-10 px-2 relative">
      <div className="absolute left-0 top-0 bg-blue-400 w-[20%] h-full blur-[20rem]"></div>
      <div className="absolute right-0 top-0 bg-blue-400 w-[20%] h-full blur-[20rem]"></div>
      <div className="text-center">
        <h1 className="uppercase font-bold text-[1.4rem]">
          <span className="text-yellow-400">movies you </span>
          <span className="text-blue-600">rated</span>{" "}
        </h1>
      </div>
      <div className="h-[300px] mt-3 container mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 6,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
          className="upcomming-swipper">
          {movies?.map((movie) => (
            <SwiperSlide key={movie._id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RatedMovies;
