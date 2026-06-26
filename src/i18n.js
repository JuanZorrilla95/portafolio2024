import i18n from "i18next";
// import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";
i18n // .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    resources: { es: { translation: es, }, en: { translation: en, }, },
    interpolation: { escapeValue: false, },
  });

export default i18n;
