import {
  Hero,
  HeroStats,
  Features,
  Bill,
  Card,
  Feedback,
  Sponsors,
  Banner,
} from "../components";

export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <HeroStats />
        <Features />
        <Bill />
        <Card />
      </main>
      <Feedback />
      <Sponsors />
      <Banner />
    </div>
  );
}
