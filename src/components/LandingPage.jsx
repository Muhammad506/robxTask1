import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div className=" text-center  h-screen bg-gradient-to-r from-[#5B53F9] to-[#FF8E57] flex flex-col gap-7 justify-center px-4">
      <div className="text-white font-bold text-3xl md:text-7xl">
        WEB MAGNETISM
      </div>
      <p className=" text-white  mx-auto w-full  md:w-2/6">
        Transforming Businuess With Unique Web Design And Strategic Digital
        Marketing For Impactful Online Visibility
      </p>
      <a
        href="https://blogs.ashutoshhathidara.com/react-awesome-shapes"
        target="blank"
      >
        <button className="text-white border border-white rounded-full px-4 py-2 bg-gradient-to-r from-[#AC71D6] to-[#FF8E57] ">
          <div className="items-center flex flex-wrap justify-center ">
            <p>GET A PROPOSAL</p> <GoArrowUpRight />
          </div>
        </button>
      </a>
    </div>
  );
};

export default LandingPage;
