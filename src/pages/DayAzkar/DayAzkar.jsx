import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function DayAzkar() {
  const [dayAzkar, setDayAzkar] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json"
      )
      .then((res) => {
        setDayAzkar(res.data["أذكار الصباح"]);

        console.log(dayAzkar);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>أذكار الصباح</title>
        <link rel="icon" href="./assets/logo2.png" />
      </Helmet>
      <Header />
      <div dir="rtl">
        {dayAzkar.map((zekr) => {
          if (zekr.content === "stop" || dayAzkar.indexOf(zekr) === 0) {
            return (
              <div className="m-5 my-10">
                {dayAzkar.indexOf(zekr)} -{" "}
                {dayAzkar[dayAzkar.indexOf(zekr) + 1].content}
              </div>
            );
          }

          return (
            <div className="m-5 my-10" key={dayAzkar.indexOf(zekr)}>
              {dayAzkar.indexOf(zekr)} - {zekr.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
