import React from 'react';

const ReviewCard = ({ name, showmore, content, avatar }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 gap-3">
      <div className="flex flex-col items-center gap-3">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <p className="text-gray-800 mb-4">{content}</p>
      </div>
        <div className='flex flex-row justify-between'>
          <h3 className="text-lg font-semibold">{name}</h3>
         <a href='https://www.google.com' target='blank'><p className="text-gray-600">{showmore}</p></a>
        </div>
      {/* You can add additional elements like rating stars here if needed */}
    </div>
  );
};

export default ReviewCard;
