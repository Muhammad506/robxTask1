const Card = ({ title, content, image }) => {
  return (
    <div className="max-w-sm rounded-md sm:flex-col  shadow-lg  bg-white">
      <div className="  p-6 text-left">
        <div className="flex flex-row gap-5 text-left mb-3">
          <img className="w-14 h-14 " src={image} alt="" />
          <div className="font-bold md:text-2xl text-lg">{title}</div>
        </div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
};

export default Card;
