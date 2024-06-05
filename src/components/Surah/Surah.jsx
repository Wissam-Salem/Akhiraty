import React from "react";

export default function Surah({ name, id, revelation }) {
  return (
    <a
      href={`/${revelation}/${id}`}
      className="w-full h-14 flex items-center px-2 rounded-md bg-[#DDCA7D]"
      title={`سورة ${name}`}
      dir="rtl"
    >
      سورة {name}
    </a>
  );
}
