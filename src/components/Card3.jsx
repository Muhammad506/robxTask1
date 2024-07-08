const Card3 = ({ title, content, image, date }) => {
  return (
    <div className="w-full sm:w-30p flex flex-col gap-6 shadow-md rounded-lg">
      <img src={image} alt="" />
      <h3 className="font-bold text-lg sm:text-xl px-4">{title}</h3>
      <p className="text-gray-700 text-sm sm:text-base px-4">{content}</p>
      <div className="flex flex-col sm:flex-row justify-between p-4">
        <p className="text-sm">{date}</p>
        <p className="text-pink-300 underline mt-2 sm:mt-0 text-sm sm:text-base">
          Read more
        </p>
      </div>
    </div>
  );
};

export default Card3;
