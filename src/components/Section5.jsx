import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Card from "../components/Card";

const cardsDatasecond = [
  {
    image: "S5-i1.svg",
    title: "Bespoke Design",
    content:
      "Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam acc",
  },
  {
    image: "S5-i1.svg",
    title: "Mobile Optimised",
    content:
      "Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam acc",
  },
  {
    image: "S5-i1.svg",
    title: "SEO Optimised",
    content:
      "Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam acc",
  },
];

const Section5 = () => {
  return (
    <div className="md:flex w-full p-2 justify-center gap-3 bg-gradient-to-r from-[#5B53F9] to-[#FF8E57]">
      <div className="md:w-2/5 text-white flex flex-col mt-10 gap-5 px-4">
        <h1 className="font-bold text-xl md:text-4xl">
          Our Bespoke Website Include The Following
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
          vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales
          lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan
        </p>
        <a
          href="https://blogs.ashutoshhathidara.com/react-awesome-shapes"
          target="blank"
        >
          <button className="text-white rounded-full px-4 py-2 bg-gradient-to-r from-[#AC71D6] to-[#FF8E57] flex items-center justify-center">
            Contact Us <GoArrowUpRight />
          </button>
        </a>
      </div>

      <div className=" p-6 ">
        <div className=" flex flex-col sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardsDatasecond.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
