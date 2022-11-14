import Image from "next/image";

const Sponsors = () => {
  const sponsors = [
    {
      src: "/assets/airbnb.png",
      alt: "airbnb",
    },
    {
      src: "/assets/binance.png",
      alt: "binance",
    },
    {
      src: "/assets/coinbase.png",
      alt: "coinbase",
    },
    {
      src: "/assets/dropbox.png",
      alt: "dropbox",
    },
  ];

  return (
    <article className="pb-20">
      <div className="w-[min(90%,1400px)] mx-auto grid grid-cols-2 place-items-center gap-4 lg:grid-cols-4">
        {sponsors.map((sponsor, index) => (
          <div
            className={`relative w-40 h-10 first:h-12 lg:w-44 ${
              sponsor.alt === "coinbase" ? "bottom-1" : ""
            }`}
            key={index}
          >
            <Image src={sponsor.src} alt={sponsor.alt} fill />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Sponsors;
