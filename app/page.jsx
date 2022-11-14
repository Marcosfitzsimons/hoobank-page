import Hero from "./components/Hero";
import HeroStats from "./components/HeroStats";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <HeroStats />
      </main>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <About />
    </>
  );
}
