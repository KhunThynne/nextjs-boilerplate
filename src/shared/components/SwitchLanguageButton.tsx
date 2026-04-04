"use client";

import { usePathname, useRouter } from "@/libs/next-intl/routing";
import { Button } from "./ui/button";
import { useLocale } from "next-intl";

export const SwitchLanguageButton = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitchLanguage = () => {
    const nextLocale = locale === "en" ? "th" : "en";
    router.replace(`${pathname}`, { locale: nextLocale });
  };

  return (
    <Button className="uppercase" variant="outline" onClick={handleSwitchLanguage}>
      {locale}
    </Button>
  );
};
