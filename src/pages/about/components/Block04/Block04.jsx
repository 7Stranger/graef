import React from "react";
import '../../About.scss'
import './Block04.scss';
import { useTranslation } from "react-i18next";
import BottomImage from '../../../../assets/png/slicers.png'

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Block04 = () => {
  useEffect(()=> {
    Aos.init({duration: 1000})
  });
  const { t } = useTranslation();
  return (
  <>
    <div className="main-black-header" data-aos="fade-up">{t("about_page_6_block_1_header")}</div>
    <div className="text" data-aos="fade-up">{t("about_page_6_block_1_text")}</div>
    <div className="bottom-image" data-aos="fade-up">
      <img src={BottomImage}/>
    </div>
  </>
  )
}

export default Block04;