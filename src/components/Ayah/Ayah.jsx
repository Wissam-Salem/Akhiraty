import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function Ayah({ ayah, ayah_id }) {
  const ayahAudio = useRef(null);
  const { id } = useParams();
  const handleAyahPlay = () => {
    if (ayahAudio.current.paused === true) {
      ayahAudio.current.play();
    }
  };

  return (
    <a
      onClick={() => {
        handleAyahPlay();
      }}
      className="ayah gap-2 my-5 max-sm:my-3 text-3xl max-sm:text-2xl"
      dir="rtl"
    >
      <span className="w-fit gap-2 after:content-['\06DD']">{ayah} </span>
      {ayah_id}
      <audio
        preload="auto"
        ref={ayahAudio}
        src={`https://quranaudio.pages.dev/2/${id}_${ayah_id}.mp3`}
      ></audio>
    </a>
  );
}
