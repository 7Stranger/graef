/* eslint-disable no-unreachable */
import React from "react";
import './MenuItem.scss';
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MenuItem = ({title, image, delay, path}) => {
  const { t } = useTranslation();
  useEffect(()=> {
    Aos.init({duration: 1000})
  })
  return (
      <div className="menu-item" data-aos-delay={delay} data-aos="fade-down">
        <NavLink to={path}>
          <div className="title"><p>{t(title)}</p></div>
          <img src={image}></img>
        </NavLink>
      </div>
  );

  MenuItem.propTypes = {
    title: PropTypes.node,
    image: PropTypes.node,
    delay: PropTypes.node,
    path: PropTypes.node,
  }
}

export default MenuItem;