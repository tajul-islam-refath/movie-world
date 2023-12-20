import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setMovie } from "../redux/features/userSlice";
import movieApi from "../api/modules/movies.api";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { avgRating } from "../utils/utiles";

const MovieDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState(null);
  const [rating, setRating] = useState(null);

  const dispatch = useDispatch();
  const movie = useSelector((state) => state.user.movie);

  const handleHover = (index) => {
    setState(index);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  const getDetails = async () => {
    const { response, err } = await movieApi.getSingleById(id);

    if (response) dispatch(setMovie(response.data));
    if (err) console.log(err);
  };

  useEffect(() => {
    getDetails();
  }, [dispatch, id]);

  const addRating = async () => {
    const { response, err } = await movieApi.addRating({
      movie: id,
      rating,
    });

    if (response) {
      toast.success("Rating added successfully!");
      setRating(null);
      setState(null);
      getDetails();
      document.getElementById("my_modal_1").close();
    }
    if (err) {
      toast.error(err.status);
    }
  };

  return (
    <section className="bg-black py-5">
      <div className="container min800:w-full mx-auto">
        <div className="w-full h-[300px] min800:h-[100%] flex flex-row min800:flex-col min800:items-center gap-10">
          <div className="w-[20%] h-auto min800:h-[100%] rounded-lg overflow-hidden">
            <img
              src={movie?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[70%] h-auto rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={movie?.trailer}
              autoPlay={false}
              controls={true}
              loop={true}
              muted={false}
            />
          </div>
        </div>
        <div className="w-full h-auto flex justify-between min800:flex-col min800:items-center gap-10 mt-3">
          <div className="w-[20%] h-auto rounded-lg overflow-hidden flex flex-col gap-2">
            <h1 className="uppercase font-semibold text-white">
              episodes{" "}
              <span className="text-yellow-400">{movie?.episodes}</span>
            </h1>
            <h1 className="uppercase font-semibold text-white">
              videos <span className="text-yellow-400">{movie?.videos}</span>
            </h1>
            <h1 className="uppercase font-semibold text-white">
              photos <span className="text-yellow-400">{movie?.photos}</span>
            </h1>
          </div>
          <div className="w-[70%] h-auto  border-l-[1px] border-l-blue-400 text-white px-4">
            <p>{movie?.desc}</p>
            <p>
              <strong className="text-blue-700">Creators: </strong>{" "}
              {movie?.creators}
            </p>
            <p>
              <strong className="text-blue-700">Stars: </strong> {movie?.strs}
            </p>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 cursor-pointer ">
                <FaStar className="inline-block text-yellow-400 " />{" "}
                {avgRating(movie?.ratings)}({movie?.ratings?.length})
              </span>
              <span
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }>
                <CiStar className="inline-block  " /> Rate Now
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* modal for taken rating  */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gray-600 text-white text-center relative z-1 overflow-y-visible py-10">
          <FaStar className="inline-block text-blue-400 text-[5rem] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50" />
          <h3 className="font-bold text-lg text-yellow-300">RATE THIS</h3>
          <p className="py-4">The Shawshank Redemption</p>
          <div className="flex justify-center items-center gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) =>
              index <= state ? (
                <FaStar
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => !rating && handleHover(null)}
                  onClick={() => handleClick(index)}
                  key={index}
                  className={`cursor-pointer text-blue-500  text-[28px]`}
                />
              ) : (
                <CiStar
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => !rating && handleHover(null)}
                  onClick={() => handleClick(index)}
                  key={index}
                  className={`cursor-pointer  text-[28px]`}
                />
              )
            )}
          </div>
          <button
            className={` my-3 py-1 px-6 ${
              rating ? "bg-yellow-500" : "bg-slate-800"
            }`}
            onClick={() => addRating()}>
            Rate Now
          </button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  setRating(null), setState(null);
                }}>
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default MovieDetails;
