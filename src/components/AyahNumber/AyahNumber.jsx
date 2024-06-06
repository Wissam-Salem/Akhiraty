import React from "react";

export default function AyahNumber({ ayah_id }) {
  return (
    <div className="relative">
      <span className="ayah-number"></span>
      {ayah_id}
    </div>
  );
}
