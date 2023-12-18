import React from "react";
import Hero from "../components/hero/Hero";
import UpcommingMovies from "../components/upcomming-movies/UpcommingMovies";
import RatedMovies from "../components/rated-movies/RatedMovies";
import MyWatchList from "../components/watch-list/MyWatchList";

const Home = () => {
  return (
    <>
      <Hero />
      <UpcommingMovies />
      <RatedMovies />
      <MyWatchList />
    </>
  );
};

export default Home;
