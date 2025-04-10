import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkoutSessions = () => {
  const images = ["/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipeToSlide: true,
    touchMove: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="workout_session bg-gray-900 text-gray-200 py-10">
      <div className="wrapper max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">
          TOP WORKOUT SESSION
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Explore our top workout sessions designed to help you achieve your fitness goals. From strength training to cardio, we have something for everyone.
        </p>
        <div className="flex justify-center">
          <Slider {...sliderSettings} className="w-full max-w-5xl">
            {images.map((src, index) => (
              <div key={index} className="px-2">
                <img
                  src={src}
                  alt={`workout-${index}`}
                  className="rounded-lg shadow-lg object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="wrapper max-w-7xl mx-auto px-4 mt-10">
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">
          FEATURED BOOTCAMPS
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Join our featured bootcamps to push your limits and train with the best. Perfect for all fitness levels, these bootcamps are designed to challenge and inspire.
        </p>
        <div className="bootcamps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Strength and Conditioning Bootcamp",
              description:
                "Build strength and endurance with our expert-led sessions. Perfect for those looking to enhance their overall fitness.",
            },
            {
              title: "High-Intensity Interval Training (HIIT)",
              description:
                "Burn calories and boost your metabolism with our fast-paced HIIT bootcamp. Suitable for all fitness levels.",
            },
            {
              title: "Yoga and Flexibility Bootcamp",
              description:
                "Improve your flexibility and find your inner peace with our yoga-focused bootcamp. Great for relaxation and recovery.",
            },
            {
              title: "Cardio Blast Bootcamp",
              description:
                "Get your heart pumping with our cardio-intensive bootcamp. Ideal for improving cardiovascular health and stamina.",
            },
          ].map((bootcamp, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <h4 className="text-lg font-semibold text-gray-100 mb-2">
                {bootcamp.title}
              </h4>
              <p className="text-gray-400">{bootcamp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
