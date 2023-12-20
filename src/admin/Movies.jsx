import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setListMovies } from "../redux/features/userSlice";
import movieApi from "../api/modules/movies.api";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.user.movies);

  useEffect(() => {
    const getMovies = async () => {
      const { response, err } = await movieApi.getAll();

      if (response) dispatch(setListMovies(response.data));
      if (err) console.log(err);
    };

    getMovies();
  }, [dispatch]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-semibold uppercase text-black">Movies</h1>
        <Link
          to="/admin/new-movie"
          className="bg-black text-white rounded-lg px-3 py-1 uppercase">
          Add New
        </Link>
      </div>
      <table class="w-full border border-slate-400 border-spacing-2 text-left">
        <thead>
          <tr>
            <th class="border border-slate-300 p-2">Title</th>
            <th class="border border-slate-300 p-2">Strs</th>
            <th class="border border-slate-300 p-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {movies?.map((movie) => (
            <tr>
              <td class="border border-slate-300 p-2">{movie.title}</td>
              <td class="border border-slate-300 p-2">
                {movie?.strs?.split(",").map((res) => (
                  <span className="bg-green-400 ml-1 py-1 px-2 rounded-2xl">
                    {res}
                  </span>
                ))}
              </td>
              <td class="border border-slate-300 p-2">
                <img
                  src={movie?.image}
                  alt=""
                  className="w-[80px] h-[100px] object-cover"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
