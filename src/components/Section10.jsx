import React from "react";
import Card3 from "./Card3";

const Section10 = () => {
  const cards3 = [
    {
      title: "Websites",
      content: "Lorem ispum dolor istit",
      image: "../Section10.png",
      date: "12-05-2024",
    },
    {
      title: "Websites",
      content: "Lorem ispum dolor istit",
      image: "../S10-2.png",
      date: "12-05-2024",
    },
    {
      title: "Websites",
      content: "Lorem ispum dolor istit",
      image: "../S10-3.png",
      date: "12-05-2024",
    }
  ];

  return (
    <div className="container p-10 mx-auto">
        <h1 className="text-xl md:text-3xl text-black font-bold text-center p-10">Latest Insight</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {cards3.map((card, index) => (
          <div key={index}>
            <Card3
              title={card.title}
              content={card.content}
              image={card.image}
              date={card.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section10;