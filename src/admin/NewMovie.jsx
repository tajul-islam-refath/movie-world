import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import movieApi from "../api/modules/movies.api";
import { getBase64 } from "../utils/utiles";

const NewMovie = () => {
  const navigate = useNavigate();

  const movieForm = useFormik({
    initialValues: {
      title: "",
      desc: "",
      image: "",
      trailer: "",
      creators: "",
      strs: "",
      episodes: "",
      videos: "",
      photos: "",
    },
    onSubmit: async (values) => {
      const { response, err } = await movieApi.create(values);
      if (response) {
        movieForm.resetForm();
        toast.success("Add New Movie success!");
        navigate("/admin");
      }

      if (err) {
        toast.error(err);
      }
    },
  });

  const onChangeFile = (event) => {
    let file = event.target.files[0];
    getBase64(file).then((base64Img) => {
      movieForm.setFieldValue("image", base64Img);
    });
  };

  return (
    <div className="w-full h-auto">
      <h2 className="my-2 font-sans uppercase font-bold">Add New Movie</h2>
      <form
        onSubmit={movieForm.handleSubmit}
        className="w-full flex flex-col gap-3">
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter movie title"
          name="title"
          value={movieForm.values.title}
          onChange={movieForm.handleChange}
        />
        <input
          type="file"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter movie title"
          name="image"
          onChange={onChangeFile}
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter trailer link"
          name="trailer"
          value={movieForm.values.trailer}
          onChange={movieForm.handleChange}
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter creators: name, name two etc.."
          name="creators"
          value={movieForm.values.creators}
          onChange={movieForm.handleChange}
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter strs: name, name two etc.."
          name="strs"
          value={movieForm.values.strs}
          onChange={movieForm.handleChange}
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Total episodes"
          name="episodes"
          value={movieForm.values.episodes}
          onChange={movieForm.handleChange}
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Total videos"
          name="videos"
          value={movieForm.values.videos}
          onChange={movieForm.handleChange}
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Total photos"
          name="photos"
          value={movieForm.values.photos}
          onChange={movieForm.handleChange}
        />
        <textarea
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          cols="30"
          rows="4"
          name="desc"
          value={movieForm.values.desc}
          onChange={movieForm.handleChange}></textarea>
        <button className="w-full bg-black py-2 rounded-lg text-white uppercase font-bold ">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
