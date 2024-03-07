import React from "react";
import '../../About.scss'
import './Block03.scss';
import Logo from '../../../../assets/png/logo-color.png'
import BottomImage from '../../../../assets/png/img_block4.png'
import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Block03 = () => {
  useEffect(()=> {
    Aos.init({duration: 1000})
  });
  const { t } = useTranslation();
  return (
  <>
    <div className="logo" data-aos="fade-up">
      <img src={Logo}/>
      <div className="headers">
        <div className="second-header">{t("about_page_4_block_1_header")}</div>
        <div className="second-header">{t("about_page_4_block_2_header")}</div>
        <div className="second-header">{t("about_page_4_block_3_header")}</div>
      </div>
    </div>
    <div className="main-black-header" data-aos="fade-up">{t("about_page_5_block_1_header")}</div>
    <div className="text" data-aos="fade-up">{t("about_page_5_block_1_text")}</div>
    <div className="bottom-image" data-aos="fade-up">
      <img src={BottomImage}/>
    </div>
  </>
  )
}

export default Block03;