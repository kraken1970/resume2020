import React from "react";
import Pdf from "assets/Resume.pdf";
import s from "./PdfPage.module.scss";

const PdfPage = () => {
  return <embed src={Pdf} className={s.pdf} />;
};

export default PdfPage;
