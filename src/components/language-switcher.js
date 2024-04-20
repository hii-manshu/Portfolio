import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button> <br />
      <br />
      <br />
      <button onClick={() => changeLanguage("hi")}>Hindi</button>
      {/* Add more buttons for other languages if needed */}
    </div>
  );
}

export default LanguageSwitcher;
