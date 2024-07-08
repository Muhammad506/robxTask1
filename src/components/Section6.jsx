import React from "react";
import Card2 from "./Card2";


const Section6 = () => {
  const cardsData3 = [
    {
      image:"../S6-C1.png",
      title: "Take Control of Your Entire Marketing Landscape",
      content:
        "We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.",
       
    },
    {
      image: "../S6-C2.png",
      title: "Your Business's Dedicated Marketing Wing",
      content:
        "ConteEven if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge",
    },
    {
      image: "../S6-C3.jpg",
      title: "A Reliable Collaborator",
      content:
        "Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand",
    },
  ];

  return (
    <div className="justify-center pt-10 mt-32 w-full text-center flex flex-col mb-10">
      <div className="md:text-5xl text-xl font-bold ">
        <h1>OverView Of Services</h1>
      </div>

      {/* Cards Section */}
      <div className="container p-10 mx-auto sm:w-3/4 md:w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardsData3.map((card, index) => (
            <div key={index}>
              <Card2
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

export default Section6;
