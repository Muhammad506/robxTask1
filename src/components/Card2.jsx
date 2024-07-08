const Card2 = ({ title, content, image }) => {
  return (
    <div className="max-w-sm rounded-md sm:flex-col">
      <div className="justify-center items-center flex flex-col p-6 gap-5 text-left">
        <img src={image} alt="" />
        <div className="font-bold text-2xl">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
        
        <div
        class="max-w-60 flex rounded-full mx-auto bg-gradient-to-tr from-red-400 via-orange-400 to-pink-400 p-0.5"
      >
        <button class="flex-1 font-bold bg-white px-2 py-1 rounded-full">
         {title} 
        </button>
      </div>
    </div>
  );
};

export default Card2;
