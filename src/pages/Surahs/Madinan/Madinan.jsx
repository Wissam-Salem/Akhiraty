import React, { useContext } from "react";
import Header from "../../../components/Header/Header";
import { SurahsContext } from "../../../components/SurahsContext/Context";
import Surah from "../../../components/Surah/Surah";

export default function Madinan() {
  const { surahs } = useContext(SurahsContext);

  return (
    <div>
      <Header />
      <div
        className="w-full h-fit grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-5 gap-y-3 p-3"
        dir="rtl"
      >
        {surahs.map((surah) => {
          if (surah.revelation_place === "madinah") {
            return (
              <Surah
                name={surah.name_arabic}
                key={surah.id}
                id={surah.id}
                enName={surah.name_simple}
                revelation="madinan"
              />
            );
          }
        })}{" "}
      </div>
    </div>
  );
}
