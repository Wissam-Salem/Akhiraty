import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import Ayah from "../../components/Ayah/Ayah";
import { Helmet } from "react-helmet";

export default function SurahPage() {
  const [verses, setVerses] = useState([]);
  const [surahName, setSurahName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`
      )
      .then((res) => {
        console.log(res.data.verses);
        setVerses(res.data.verses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quranapi.pages.dev/api/${id}.json`)
      .then((res) => {
        setSurahName(res.data.surahNameArabic);
        console.log(surahName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Helmet>
        <title>سورة {surahName}</title>
        <link rel="icon" href="./assets/logo2.png" />
      </Helmet>
      <Header />
      <div className="h-fit flex flex-col items-center text-center gap-5 pt-3 pb-16 px-5 max-sm:px-3 ta">
        {verses.map((verse) => {
          return (
            <Ayah
              ayah={verse.text_indopak}
              ayah_id={verse.verse_key.substr(
                verse.verse_key.indexOf(":") + 1,
                verse.verse_key.length
              )}
              key={verse.id}
            />
          );
        })}
      </div>
    </div>
  );
}
