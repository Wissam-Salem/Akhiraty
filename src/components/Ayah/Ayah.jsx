import React from "react";

export default function Ayah({ ayah, ayah_id }) {
  return (
    <div className="ayah gap-2 my-5 max-sm:my-3 text-3xl max-sm:text-2xl" dir="rtl">
      <span className="w-fit gap-2 after:content-['\06DD']">{ayah} </span>
      {ayah_id}
    </div>
  );
}
