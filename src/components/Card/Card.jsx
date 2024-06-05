import React from "react";

export default function Card({ pic, text }) {
  return (
    <div className="w-96 text-white h-fit max-md:p-5 p-12 m-3 flex flex-col items-center justify-center gap-3 bg-[#A6A867] rounded-lg">
      <img className="w-28 max-md:w-16" src={pic} alt="pic" />
      <p className="text-2xl max-md:text-lg text-center w-fit">{text}</p>
    </div>
  );
}
