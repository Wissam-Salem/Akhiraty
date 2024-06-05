import React from "react";

export default function Ayah({ text, ayah_id }) {
  return (
    <a
      href="#"
      className="ayah w-[95%] min-h-20 flex items-center gap-2 max-sm:text-lg text-xl bg-[#646f4b] text-white rounded-md p-3 "
      dir="rtl"
    >
      <div>{ayah_id}</div>
      <div>{text}</div>
    </a>
  );
}
