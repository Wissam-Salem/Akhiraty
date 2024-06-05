import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function NightZekr() {
  const [nightAzkar, setNightAzkar] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json"
      )
      .then((res) => {
        setNightAzkar(res.data["أذكار المساء"]);

        console.log(nightAzkar);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>أذكار المساء</title>
      </Helmet>
      <Header />
      <div dir="rtl">
        {nightAzkar.map((zekr) => {
          if (zekr.content === "stop") {
            return (
              <div className="m-5 my-10">
                {nightAzkar.indexOf(zekr)} -{" "}
                {nightAzkar[nightAzkar.indexOf(zekr) + 1].content}
              </div>
            );
          }

          return (
            <div className="m-5 my-10" key={nightAzkar.indexOf(zekr)}>
              {nightAzkar.indexOf(zekr)} - {zekr.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
