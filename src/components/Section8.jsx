import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowUpRight } from "react-icons/go";

const Section8 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjusted breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto p-10">
      <div className="flex flex-col md:flex-row gap-5 justify-between h-full">
        {" "}
        {/* Adjusted layout for smaller screens */}
        <div className="md:w-2/4 flex flex-col justify-center gap-5">
          {" "}
          {/* Adjusted width for smaller screens */}
          <h1 className="font-bold md:text-6xl text-xl mb-4 md:mb-0">
            Our Work
          </h1>{" "}
          {/* Added margin bottom for smaller screens */}
          <p>
            We don’t claim to be gurus or wizards. We’re just a super
            experienced, passionate team who knows how to get results for our
            clients. All our work is custom and thoughtfully designed, written,
            and developed with your business goals in mind.
          </p>
        </div>
        <button className="text-white rounded-full self-end h-12 px-4 bg-gradient-to-r from-[#AC71D6] to-[#FF8E57] items-center flex flex-wrap justify-center">
          VIEW FULL PORTFOLIO <GoArrowUpRight />
        </button>
      </div>
      <Slider {...settings} className="my-5 flex g">
        <div>
          <img src="../C-1.png" alt="Slide 1" />
          <h className="font-bold md:text-xl">REDESIGN OF B2B WEBSITE</h>
          <p >Web design</p>
        </div>
        <div>
          <img src="../C-2.png" alt="Slide 2" />
          <h className="font-bold md:text-xl">MOBILE APPLICATION</h>
          <p >App Development</p>
        </div>
        <div>
          <img src="../C-3.png" alt="Slide 3" />
          <h className="font-bold md:text-xl">E-COMMERCE SHOP</h>
          <p >Web development</p>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Section8;
