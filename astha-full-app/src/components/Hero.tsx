
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-900 text-white py-20 text-center px-6">
      <h1 className="text-4xl lg:text-6xl font-bold">{t("hero.title")}</h1>
      <h2 className="text-3xl text-orange-400 mt-2">{t("hero.subtitle")}</h2>
      <p className="text-lg max-w-2xl mx-auto mt-6">{t("hero.description")}</p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md">{t("hero.contact")}</button>
        <button className="border border-white text-white px-6 py-3 rounded-md">{t("hero.learn")}</button>
      </div>
    </section>
  );
};
