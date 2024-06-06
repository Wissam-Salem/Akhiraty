import React from "react";

export default function Ayah({ image, ayah_id }) {
  return (
    <div className="my-5 max-sm:my-3" dir="rtl">
      <img src={image} alt={ayah_id} />
    </div>
  );
}
