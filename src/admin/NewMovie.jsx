import React from "react";

const NewMovie = () => {
  return (
    <div className="w-full h-auto">
      <h2 className="my-2 font-sans uppercase font-bold">Add New Movie</h2>
      <form action="" className="w-full flex flex-col gap-3">
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter movie title"
        />
        <input
          type="file"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter movie title"
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter trailer link"
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter creators: name, name two etc.."
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter strs: name, name two etc.."
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter episodes"
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter videos"
        />
        <input
          type="text"
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          placeholder="Enter photes"
        />
        <textarea
          className="w-full border border-black rounded-lg p-2 font-[14px]"
          name=""
          id=""
          cols="30"
          rows="4"></textarea>
        <button className="w-full bg-black py-2 rounded-lg text-white uppercase font-bold ">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
