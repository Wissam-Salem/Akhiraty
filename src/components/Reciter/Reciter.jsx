import React from "react";
import { Helmet } from "react-helmet";

export default function Reciter({ reciter }) {
  return (
    <a
      href="#"
      className="reciter flex justify-center items-center w-80 h-52 text-3xl rounded-md text-white bg-stone-700"
    >
      <Helmet>
        <title>إذاعة القرآن</title>
      </Helmet>
      <h1>{reciter}</h1>
    </a>
  );
}
