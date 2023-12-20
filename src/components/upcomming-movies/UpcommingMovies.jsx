import { Swiper, SwiperSlide } from "swiper/react";
import "./upcomming.css";
import { useSelector } from "react-redux";
import img from "../../assets/hero.jpg";

const UpcommingMovies = () => {
  const movies = useSelector((state) => state.user.movies);
  return (
    <section className="w-full min-h-[100%] bg-black py-10 px-2 relative">
      <div className="absolute left-0 top-0 bg-blue-400 w-[30%] h-full blur-[20rem]"></div>
      <div className="text-center">
        <h1 className="uppercase font-bold text-[1.4rem]">
          <span className="text-blue-600">upcomming</span>{" "}
          <span className="text-yellow-400">movies</span>
        </h1>
        <p className="text-white text-[12px]">
          We constantly offers new movies
        </p>
      </div>
      <div className="h-[300px] mt-3">
        <Swiper
          slidesPerView={5}
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
            <SwiperSlide>
              <div className="w-full h-full relative overflow-hidden rounded-lg">
                <img
                  src={movie?.image}
                  alt=""
                  className="w-full h-full block  object-cover absolute z-1"
                />
                <div className="w-full absolute bottom-0 text-whit py-2 font-semibold backdrop-blur-sm">
                  <h3 className="text-white">{movie?.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UpcommingMovies;
