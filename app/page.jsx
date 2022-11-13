import Hero from "./components/Hero";
import HeroStats from "./components/HeroStats";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <HeroStats />
      </main>
      <FirstSection />
      <SecondSection />
    </>
  );
}
