import React from "react";
import ReviewCard from "./ReviewCard";

const Section9 = () => {
  const ReviewCards = [
    {
      name: "John Doe",
      showmore: "Software Developer",
      content: "Wowww! Grape Very Dangerous",
      avatar: "../S9-p1.png", // Correct the path to the avatar image
    },
    {
      name: "John Doe",
      showmore: "Software Developer",
      content: "Wowww! Grape Very Dangerous",
      avatar: "../S9-p2.png", // Correct the path to the avatar image
    },
    {
      name: "John Doe",
      showmore: "Software Developer",
      content: "Wowww! Grape Very Dangerous",
      avatar: "../S9-p3.png", // Correct the path to the avatar image
    }
  ];

  return (
    <div className="container p-10 mx-auto sm:w-3/4 md:w-full">
      <h1 className="font-bold text-2xl text-center mb-10">What Our Clients Say About Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ReviewCards.map((reviewCard, index) => (
          <div key={index} className="rounded-lg shadow-md">
            {/* Added shadow-md class above */}
            <ReviewCard
              name={reviewCard.name}
              showmore={reviewCard.showmore}
              content={reviewCard.content}
              avatar={reviewCard.avatar}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section9;
