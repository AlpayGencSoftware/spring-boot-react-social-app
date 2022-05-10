import React from "react";
import { withTranslation } from "react-i18next";
import { changeLanguage } from "../api/apiCalls";
import gb from "../assets/gb.svg";
import de from "../assets/de.svg";

const LanguageSelector = (props) => {
    const onChangeLanguage = (language) => { 
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };

  return (
    <div>
      <img
        src={gb}
        height="16"
        alt="gb"
        onClick={() => {
          onChangeLanguage("en");
        }}
      ></img>
      <img
        src={de}
        height="16"
        alt="de"
        onClick={() => {
          onChangeLanguage("de");
        }}
      ></img>
    </div>
  );
};
export default withTranslation()(LanguageSelector);
