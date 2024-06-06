import React, { useEffect, useRef, useState } from "react";
import { fetchFn } from "../../components/SurahsContext/FetchQuery";
import { useQuery } from "react-query";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Radio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeIcon, setVolumeIcon] = useState(faVolumeHigh);
  const [playIcon, setPlayIcon] = useState(faPause);
  const audioPlayer = useRef(null);
  const line = useRef(null);
  const { id } = useParams();

  const {
    data: radios,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryFn: () => fetchFn(),
    queryKey: ["radioKey"],
  });

  console.log(radios);

  const handleVolume = () => {
    if (isMuted === false) {
      setIsMuted(true);
      setVolumeIcon(faVolumeMute);
    } else {
      setIsMuted(false);
      setVolumeIcon(faVolumeHigh);
    }
  };

  const handlePlay = () => {
    if (audioPlayer.current.paused === true) {
      audioPlayer.current.play();
      setPlayIcon(faPause);
    } else {
      audioPlayer.current.pause();
      setPlayIcon(faPlay);
    }
  };

  const handleLineForward = () => {
    if (line.current.value < 100) {
      audioPlayer.current.currentTime += 10;
      line.current.value += 10;
    }
  };

  const handleLineBackward = () => {
    audioPlayer.current.currentTime -= 10;
    if (line.current.value > 70) {
      line.current.value -= 10;
    }
  };

  return (
    <div>
      <Helmet>
        <title>{radios?.radios[id - 1].name}</title>
      </Helmet>
      <Header />
      <div className="flex justify-center items-center h-[calc(100vh-300px)] max-sm:h-[calc(100vh-330px)]">
        <div className="relative w-[32rem] h-96 max-sm:w-[22rem] max-sm:h-80 rounded-md flex flex-col items-center bg-[#646f4b]">
          <a
            href="#"
            className="absolute right-0 m-5"
            onClick={() => {
              handleVolume();
            }}
          >
            <FontAwesomeIcon icon={volumeIcon} color="white" />
          </a>
          <div className="mt-12 max-sm:mt-5 flex flex-col items-center gap-3 text-center text-white text-xl">
            <img
              className="max-sm:w-40 w-48 rounded-md"
              src={radios?.radios[id - 1].img}
              alt=""
            />
            <h1>{radios?.radios[id - 1].name}</h1>
          </div>
          <div className="absolute bottom-0 p-5">
            <div>
              <input
                ref={line}
                className="w-[250px] max-sm:w-[220px] text-green-400"
                type="range"
                defaultValue={90}
                minLength={70}
                maxLength={90}
                disabled
              />
            </div>
            <div className="flex justify-center gap-5 my-1">
              <a
                href="#"
                onClick={() => {
                  handleLineBackward();
                }}
              >
                <FontAwesomeIcon icon={faBackward} color="white" size="2xl" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={playIcon} color="white" size="2xl" />
              </a>
              <a
                href="#"
                onClick={() => {
                  handleLineForward();
                }}
              >
                <FontAwesomeIcon icon={faForward} color="white" size="2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <audio
        preload="none"
        muted={isMuted}
        autoPlay={true}
        ref={audioPlayer}
        src={radios?.radios[id - 1].url}
      />
    </div>
  );
}
