import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import Ayah from "../../components/Ayah/Ayah";

export default function SurahPage() {
  const [verses, setVerses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`
      )
      .then((res) => {
        console.log(res.data.verses);
        setVerses(res.data.verses);
        console.log(verses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="h-fit flex flex-col items-center gap-2 py-5">
        {verses.map((ayah) => {
          return (
            <Ayah
              text={ayah.text_indopak}
              ayah_id={ayah.verse_key.substr(
                ayah.verse_key.indexOf(":") + 1,
                ayah.verse_key.length + 1
              )}
              key={ayah.id}
            />
          );
        })}
      </div>
    </div>
  );
}
