import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import type { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

// Arrow component props interface for custom arrows
interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Carousel = () => {
  const context = useContext(DataContext);
  const navigate = useNavigate()

  if (!context) {
    throw new Error("Carousel must be used within DataProvider");
  }

  const { data } = context;

  if (!data) {
    return <p>Loading...</p>;
  }

  //custom arrows for the carousel
  const SampleNextArrow = ({ onClick }: ArrowProps) => {
    return (
      <button
        aria-label="Next slide"
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 
                 right-3 sm:right-5 z-10 
                 bg-red-500 text-white 
                 p-2 rounded-full shadow-md 
                 hover:bg-red-600 transition"
      >
        <AiOutlineArrowRight size={22} />
      </button>
    );
  };

  const SamplePrevArrow = ({ onClick }: ArrowProps) => {
    return (
      <button
        aria-label="Previous slide"
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 
                 left-3 sm:left-5 z-10 
                 bg-red-500 text-white 
                 p-2 rounded-full shadow-md 
                 hover:bg-red-600 transition"
      >
        <AiOutlineArrowLeft size={22} />
      </button>
    );
  };


  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          arrows: false,
        },
      },
    ],
  };


  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7).map((item) => (
          <div
            key={item.id}
            className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 
                      justify-center items-center 
                      min-h-105 md:min-h-130 
                      px-2 md:px-10 text-center md:text-left">

              {/* Text Section */}
              <div className="space-y-4 md:space-y-6 max-w-xl">
                <h3 className="text-red-500 font-semibold text-xs sm:text-sm md:text-base">
                  Powering Your World with the Best in Electronics
                </h3>

                <h1 className="text-2xl sm:text-3xl md:text-4xl 
                         font-bold uppercase line-clamp-3 text-white">
                  {item.title}
                </h1>

                <p className="text-gray-400 text-sm sm:text-base line-clamp-3">
                  {item.description}
                </p>

                <button
                  onClick={() => navigate('/products')}
                  className="bg-red-500 text-white px-5 py-2 rounded-md 
                             hover:bg-red-600 transition cursor-pointer">
                  Shop Now
                </button>
              </div>

              {/* Image Section */}
              <div className="w-48 sm:w-60 md:w-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-64 sm:w-72 md:w-80 lg:w-96 hover:scale-105 transition-all duration-300 shadow-2xl shadow-red-400"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>

  );
};

export default Carousel;
