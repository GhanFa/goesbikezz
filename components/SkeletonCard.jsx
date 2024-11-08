import React from "react";

const SkeletonCard = () => {
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative animate-pulse">
        <div className="bg-gray-200 w-full h-full group-hover:bg-gray-300 transition-all duration-300 flex justify-center items-center"></div>
        {/* Button group */}
        <div className="absolute bottom-0 right-0 top-0 left-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
          <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
        </div>
      </div>
      <div className="mb-2 text-gray-400 font-semibold capitalize bg-gray-300 h-4 rounded w-1/2"></div>
      <div className="mb-1 bg-gray-300 h-5 rounded w-3/4"></div>
      <div className="text-lg font-bold text-accent bg-gray-300 h-6 rounded w-1/3"></div>
    </div>
  );
};

export default SkeletonCard;
