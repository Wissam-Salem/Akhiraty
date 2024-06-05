import React from "react";

export default function ZekrType({ type, time, zekrPage }) {
  
  return (
    <a
      href={zekrPage}
      className="w-[70%] h-40 max-sm:h-28 p-5 flex items-center gap-5 text-2xl max-sm:text-lg rounded-md bg-[#E2F1AF]
      "
      dir="rtl"
    >
      <div>
        <img
          className="w-24 max-sm:w-14"
          src={`../assets/${type}.png`}
          alt="zekr"
        />
      </div>
      <div>أذكار {time}</div>
    </a>
  );
}
