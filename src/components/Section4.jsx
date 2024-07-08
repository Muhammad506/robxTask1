import React from "react";
import Card from "./Card";

const Section4 = () => {
  const cardsData = [
    {
      image: "S4-i3.svg",
      title: "Take Control of Your Entire Marketing Landscape",
      content:
        "We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.",
    },
    {
      image: "S5-i1.svg",
      title: "Your Business's Dedicated Marketing Wing",
      content:
        "ConteEven if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge",
    },
    {
      image: "S4-i1.svg",
      title: "A Reliable Collaborator",
      content:
        "Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand",
    },
  ];

  return (
    <div className="justify-center pt-10 mt-32 w-full text-center flex flex-col mb-10 bg-[#F3F2FF]">
        <h1 className="md:text-5xl text-xl font-bold" >Why Choose Us</h1>
      

      {/* Cards Section */}
      <div className="container p-2 md:p-8 mx-auto sm:w-3/4 md:w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardsData.map((card, index) => (
            <div key={index}>
              <Card
                title={card.title}
                content={card.content}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
