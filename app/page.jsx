import Hero from "./components/Hero";
import HeroStats from "./components/HeroStats";
import Features from "./components/Features";
import Bill from "./components/Bill";
import Card from "./components/Card";
import Feedback from "./components/Feedback";
import Sponsors from "./components/Sponsors";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <HeroStats />
      </main>
      <Features />
      <Bill />
      <Card />
      <Feedback />
      <Sponsors />
      <Banner />
    </>
  );
}
