import React from "react";
import Header from "../../components/Header/Header";
import Reciter from "../../components/Reciter/Reciter";

export default function Reciters() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center items-center gap-5 p-3 px-5">
        <Reciter reciter="ابو بكر الشاطري" id={1}  />
        <Reciter reciter="مشاري راشد العفاسي" id={14} />
        <Reciter reciter="عبدالباسط عبدالصمد" id={7} />
        <Reciter reciter="ماهر المعيقلي" id={10} />
        <Reciter reciter="ياسر الدوسري" id={18} />
        <Reciter reciter="محمد صديق المنشاوي" id={11} />
      </div>
    </div>
  );
}
