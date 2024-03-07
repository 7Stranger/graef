import React from "react";
import '../../About.scss'
import './Block02.scss';
import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Block02 = () => {
  useEffect(()=> {
    Aos.init({duration: 1000})
  });
  const { t } = useTranslation();
  return (
  <>
    <div className="second-header" data-aos="fade-up">{t("about_page_4_block_1_header")}</div>
    <div className="text" data-aos="fade-up">{t("about_page_4_block_1_text")}</div>
    <div className="second-header" data-aos="fade-up">{t("about_page_4_block_2_header")}</div>
    <div className="text" data-aos="fade-up">{t("about_page_4_block_2_text")}</div>
    <div className="second-header" data-aos="fade-up">{t("about_page_4_block_3_header")}</div>
    <div className="text" data-aos="fade-up">{t("about_page_4_block_3_text")}</div>
  </>
  )
}

export default Block02;