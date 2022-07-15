import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getCurrentLanguage } from '@/utils/i18n';
import { DEFAULT_LANG, REGIONS, RESOURCES } from './constants/i18n';


i18n.use(initReactI18next).init({
  resources: RESOURCES,
  lng: getCurrentLanguage(),
  fallbackLng: REGIONS[DEFAULT_LANG].key,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
