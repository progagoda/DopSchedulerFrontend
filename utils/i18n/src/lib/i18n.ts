import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(resourcesToBackend((language: string, namespace: string) => import(`../locales/${language}/${namespace}.json`)))
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    lng: 'cimode' ,
    interpolation: {
      escapeValue: false,
    }
  });
export default i18n;
