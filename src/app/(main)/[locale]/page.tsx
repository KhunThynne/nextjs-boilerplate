import { SwitchLanguageButton } from "@/shared/components/SwitchLanguageButton";

import { SwitchThemeButton } from "@/shared/components/SwitchThemeButton";
import HomeDetail from "./components/HomeDetail";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-5">
      <HomeDetail />
      <section className="flex gap-5">
        <SwitchLanguageButton />
        <SwitchThemeButton />
      </section>
    </div>
  );
}
