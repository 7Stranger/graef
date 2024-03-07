import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/json/en.json";
import translationUA from "./assets/json/ua.json";

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
    <div className="App">
        <Navbar/>
        <About/>
    </div>
  );
}

export default App;
