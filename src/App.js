import React from 'react';
import './App.scss';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/json/en.json";
import translationUA from "./assets/json/ua.json";
import Layout from './layouts/layout/Layout';

import { Routes, Route } from "react-router-dom";

import About from './pages/about/About';
import Products from './pages/products/Products';

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ua",
  fallbackLng: "ua",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<About />} />
        <Route path="graef/about" element={<About />} />
        <Route path="graef/products/*" element={<Products />} />
        <Route path="*" element={<About />} />
      </Route>
  </Routes>
  );
}

export default App;
