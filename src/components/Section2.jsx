import React from "react";
import backgroundImage from '../assets/bg-s2.png'; // Adjust the path as per your project structure

import "../index.css";
import { GoArrowUpRight } from "react-icons/go";

const Section2 = () => {
  return (
    <div className="background " style={{ backgroundImage: `url(${backgroundImage})`, marginTop: "-80px" }}>
      <main className=" w-full flex flex-col md:flex-row p-5 md:p-10 gap-5">
        <div className="flex flex-col gap-4 md:w-2/3">
          <h3 className="font-bold text-xl mt-32">Welcome To Web Magnetism</h3>
          <p className="py-1">
            Your hub for bespoke web design and digital marketing success. We
            seamlessly merge creativity and SEO expertise to craft visually
            stunning websites that magnetize audiences.
          </p>
          <p className="py-1">
            Our digital marketing, from SEO mastery to impactful campaigns, ensures
            your brand's resonance online. At Web Magnetism, we're not just
            designers; we're digital architects, sculpting unique online experiences
            that elevate your brand.
          </p>
          <p>
            Navigate the digital landscape with confidence – choose Web Magnetism for
            tailored web design and strategic digital marketing, where innovation
            meets results for a compelling online journey.
          </p>
          <a
            href="https://blogs.ashutoshhathidara.com/react-awesome-shapes"
            target="blank"
          >
            <button className="text-white rounded-full px-4 py-2 bg-gradient-to-r from-[#AC71D6] to-[#FF8E57] items-center flex flex-wrap justify-center">
              About US <GoArrowUpRight />
            </button>
          </a>
        </div>
        <div className="w-full h-full md:w-1/3 mt-40" >
          <img className="object-cover" src="./section2.jpg" alt="logo" />
        </div>
      </main>
    </div>
  );
};

export default Section2;
