
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="space-x-2">
      <button onClick={() => i18n.changeLanguage("en")} className="text-sm">🇬🇧 EN</button>
      <button onClick={() => i18n.changeLanguage("bn")} className="text-sm">🇧🇩 বাংলা</button>
    </div>
  );
};
