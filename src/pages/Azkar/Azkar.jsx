import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import ZekrType from "../../components/ZekrType/ZekrType";
import { SurahsContext } from "../../components/SurahsContext/Context";

export default function Azkar() {
  const { hadith } = useContext(SurahsContext);

  return (
    <div>
      <Header />
      <div className="flex gap-5 px-5 mt-5">
        <ZekrType type="moon" time="المساء" zekrPage="/night_zekr" />
        <ZekrType type="sun" time="الصباح" zekrPage="/day_zekr" />
      </div>
      <div
        className="relative h-[calc(100vh-400px)] overflow-auto flex flex-col justify-evenly items-start max-sm:gap-5 m-5 px-5 text-center bg-[#E3D888] rounded-md"
        dir="rtl"
      >
        <h1 className="absolute right-3 top-3 p-3 ring-2 rounded-lg bg-amber-300">
          بطاقة مؤمن
        </h1>
        <p className="text-2xl max-sm:text-xl m-3 pb-5 mt-20">{hadith}</p>
      </div>
    </div>
  );
}
