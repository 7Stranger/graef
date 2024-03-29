/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { HashRouter } from 'react-router-dom';

i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <I18nextProvider i18n={i18next}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nextProvider>
  </>,
  document.getElementById('root')
);
