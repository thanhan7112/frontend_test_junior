import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../i18n/locales/en/common.json';
import vi from '../i18n/locales/vi/common.json';

const lng = localStorage.getItem('locale') ?? 'vi';

const fallbackLng: { [x: string]: string } = {
  vi: 'en',
  en: 'vi',
};

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  resources: {
    en,
    vi,
  },
  lng,
  fallbackLng: fallbackLng[lng],
});

export default i18n;
