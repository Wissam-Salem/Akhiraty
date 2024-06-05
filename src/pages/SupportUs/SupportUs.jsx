import React from "react";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

export default function SupportUs() {
  return (
    <div>
      <Helmet>
        <title>ادعمنا</title>
        <link rel="icon" href="./assets/logo2.png" />
      </Helmet>
      <Header />
      <div className="h-[calc(100vh-400px)] flex justify-center items-center text-3xl max-sm:text-2xl">
        <h1>...الصفحة تحت التطوير</h1>
      </div>
    </div>
  );
}
