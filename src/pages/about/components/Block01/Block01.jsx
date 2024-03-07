import React from "react";
import '../../About.scss'
import './Block01.scss';
import Sert from '../../../../assets/png/sert_1.png';
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import GraefFamily from '../../../../assets/png/graef_family_photo.jpg'

import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Block01 = () => {
  useEffect(()=> {
    Aos.init({duration: 1000})
  });
  const { t } = useTranslation();
  return (
  <>
    <div className="graef-family">
      <div className="graef-family-photo" data-aos="fade-down">
        <img src={GraefFamily}/>
      </div>
      <div>
        <div className="main-black-header" data-aos="fade-up">{t("about_page_1_block_1_header")}</div>
        <div className="text" data-aos="fade-up">{t("about_page_1_block_1_text")}</div>
      </div>
    </div>
    <div className="qoute" data-aos="fade-up">{t("about_page_1_block_2_text")}</div>
    <div className="text" data-aos="fade-up">{t("about_page_1_block_3_text")}</div>
    <div className="logo-header" data-aos="fade-up">{t("about_page_1_block_2_header")}</div>
    <div className="text" data-aos="fade-up">{t("about_page_1_block_4_text")}</div>
    <div className="owners-wishes" data-aos="fade-up">
      <div className="second-headers">
        <div className="second-header">{t("about_page_2_block_1_header")}</div>
        <div className="second-header">{t("about_page_2_block_2_header")}</div>
      </div>
      <div className="sert">
        <img src={Sert}/>
      </div>
    </div>
    <div className="second-header" data-aos="fade-up">{t("about_page_3_block_1_header")}</div>
    <div className="text" data-aos="fade-up">{t("about_page_3_block_1_text")}</div>
    <div className="smile-faces">
      <div data-aos="zoom-in"><FaRegFaceSmile/></div>
      <div data-aos="zoom-in"><FaRegFaceSmileBeam/></div>
      <div data-aos="zoom-in"><FaFaceSmile/></div>
    </div>
  </>
  )
}

export default Block01;