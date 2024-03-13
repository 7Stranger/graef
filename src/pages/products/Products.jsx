/* eslint-disable react/jsx-key */
import React from "react";
import './Products.scss';
import MenuItem from './components/menu-item/MenuItem'
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import CuttingWorld from '../../assets/jpg/cutting_world.jpg';
import CoffeeWorld from '../../assets/jpg/coffee_world.jpg';
import BakingWorld from '../../assets/jpg/baking_world.jpg';
import HelpersWorld from '../../assets/jpg/helpers_world.jpg';

const Products = () => {
  const { t } = useTranslation();
  const menuItems = [
    {
      image: CuttingWorld,
      title: `products_page_menu_item_header_${1}`,
      animationDelay: 200,
      path: 'cutting'
    },
    {
      image: CoffeeWorld,
      title: `products_page_menu_item_header_${2}`,
      animationDelay: 400,
      path: 'coffee'
    },
    {
      image: BakingWorld,
      title: `products_page_menu_item_header_${3}`,
      animationDelay: 600,
      path: 'baking'
    },
    {
      image: HelpersWorld,
      title: `products_page_menu_item_header_${4}`,
      animationDelay: 800,
      path: 'helpers'
    },
  ];

  useEffect(()=> {
    Aos.init({duration: 1000})
  });


  return (
    <div className="products">
      <div className="wrapper">
        <div className="main-headers" data-aos="fade-down">
          <h1>{t("products_page_main_header")}</h1>
          <h2>{t("products_page_second_header")}</h2>
        </div>
        <div className="products-menu">
          {
            menuItems.map(({title, image, animationDelay, path}) => (
              <MenuItem title={title} image={image} delay={animationDelay} path={path}/>
            ))
          }
        </div>
        <Routes>
          <Route path="cutting" element={<h1>Cutting World</h1>}/>
          <Route path="coffee" element={<h1>Coffee World</h1>}/>
          <Route path="baking" element={<h1>Baking World</h1>}/>
          <Route path="helpers" element={<h1>Helpers World</h1>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Products;