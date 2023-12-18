import React from "react";
import img from "../assets/hero.jpg";
import banner from "../assets/hd-wallpaper-jawan.jpg";
const MovieDetails = () => {
  return (
    <section className="bg-black py-5">
      <div className="container mx-auto">
        <div className="w-full h-[300px] flex justify-between gap-10">
          <div className="w-[20%] h-auto rounded-lg overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-[70%] h-auto rounded-lg overflow-hidden">
            <img src={banner} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full h-auto flex justify-between gap-10 mt-3">
          <div className="w-[20%] h-auto rounded-lg overflow-hidden flex flex-col gap-2">
            <h1 className="uppercase font-semibold text-white">
              episodes <span className="text-yellow-400">121</span>
            </h1>
            <h1 className="uppercase font-semibold text-white">
              videos <span className="text-yellow-400">80</span>
            </h1>
            <h1 className="uppercase font-semibold text-white">
              photos <span className="text-yellow-400">21</span>
            </h1>
          </div>
          <div className="w-[70%] h-auto  border-l-[1px] border-l-blue-400 text-white px-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium sint fugiat saepe aliquam quia nam tempore similique
              deleniti voluptatem, dolores eos, inventore quam odit illo autem?
              Eligendi libero odio quas!
            </p>
            <p>
              <strong className="text-blue-700">Creators: </strong> Tajul Islam
              Refath
            </p>
            <p>
              <strong className="text-blue-700">Stars: </strong> Tajul Islam
              Refath
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
