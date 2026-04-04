import { useTranslations } from "next-intl";

export default function HomeDetail() {
  const t = useTranslations("Index");
  return (
    <>
      <h1 className="text-6xl font-bold">{t("title")}</h1>
      <p className="mt-3 text-2xl">{t("description")}</p>
    </>
  );
}
