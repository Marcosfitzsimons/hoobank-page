import Image from "next/image";
import Hero from "./components/Hero";
import HeroStats from "./components/HeroStats";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HeroStats />
    </main>
  );
}
