import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home-header": "Start your fitness journey today!",
      "home-address": "34 Murray Street, Ottawa ON",
      "become-member": "Become a Member",
      "nav-classes": "Classes",
      "nav-blog": "Blog",
      "nav-contact": "Contact Us",
      "nav-lang": "Language",
      "classes-title": "Fitness Classes"
    }
  },
  fr: {
    translation: {
      "home-header": "Commencez votre parcours de remise en forme aujourd'hui !",
      "home-address": "34 Rue Murray, Ottawa ON",
      "become-member": "Devenir membre",
      "nav-classes": "Des Classes",
      "nav-blog": "Blog",
      "nav-contact": "Nous Contacter",
      "nav-lang":"Langue",
      "classes-title": "Cours de Fitness"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
