import React, { useContext } from "react";
import Header from "../../../components/Header/Header";
import Surah from "../../../components/Surah/Surah";
import { SurahsContext } from "../../../components/SurahsContext/Context";
import { Helmet } from "react-helmet";

export default function Meccan() {
  const { surahs } = useContext(SurahsContext);

  return (
    <div>
      <Helmet>
        <title>السور المكية</title>
        <link rel="icon" href="../assets/logo2.png" />
      </Helmet>
      <Header />
      <div
        className="w-full h-fit grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-5 gap-y-3 p-3"
        dir="rtl"
      >
        {surahs.map((surah) => {
          if (surah.revelation_place === "makkah") {
            return (
              <Surah
                name={surah.name_arabic}
                enName={surah.name_simple}
                id={surah.id}
                key={surah.id}
                revelation="meccan"
              />
            );
          }
        })}{" "}
      </div>
    </div>
  );
}
