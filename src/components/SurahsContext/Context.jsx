import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import App from "../../App";

export const SurahsContext = createContext(null);
export default function Context() {
  const [surahs, setSurahs] = useState([]);
  const [audios, setAudios] = useState([]);
  const [hadith, setHadith] = useState("");

  const constant = 0;

  useEffect(() => {
    axios
      .get("https://api.quran.com/api/v4/chapters")
      .then((res) => {
        setSurahs(res.data.chapters);
      })
      .catch((err) => {
        console.log(err);
        setSurahs([]);
      });
  }, [constant]);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 50);
    axios
      .get("https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=50")
      .then((res) => {
        console.log(res.data);
        setHadith(res.data.items[randomNumber].arab);
      });
  }, []);


  return (
    <SurahsContext.Provider value={{ surahs, hadith, audios }}>
      <App />
    </SurahsContext.Provider>
  );
}
