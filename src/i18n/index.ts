import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./resources/en.json";
import zh from "./resources/zh.json";

// TODO: 没查到对应的 API ，后续详细查查获取当前的实例所有语言列表
export const languagesMap = [
  {
    key: "en",
    title: "en",
  },
  {
    key: "zh",
    title: "zh",
  },
];

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

i18n
  .use(detector) // 自动检测浏览器语言
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: "translation",
    ns: "translation", // 表示 useTranslation 使用的命令空间
    resources,
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
