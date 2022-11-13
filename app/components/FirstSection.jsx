import Image from "next/image";
import Button from "./Button";

const FirstSection = () => {
  const articlesData = [
    {
      title: "Rewards",
      text: "The best credit cards offer some tantalizing combinations of promotions and prizes",
      icon: "/assets/Star.svg",
      alt: "star",
    },
    {
      title: "100% Secured",
      text: "We take proactive steps make sure your information and transactions are secure.",
      icon: "/assets/Shield.svg",
      alt: "shield",
    },
    {
      title: "Balance Transfer",
      text: "A balance transfer credit card can save you a lot of money in interest charges.",
      icon: "/assets/Send.svg",
      alt: "send",
    },
  ];

  return (
    <section className="py-20">
      <div className="w-[min(90%,1400px)] mx-auto flex flex-col gap-3 lg:flex-row lg:justify-between">
        <div className="text-center flex flex-col items-center gap-3 lg:text-start lg:items-start lg:w-[50%] lg:gap-8">
          <h2 className="text-3xl flex flex-col gap-2 font-semibold lg:text-4xl xl:text-5xl xl:leading-[60px]">
            You do the business, <span>we’ll handle the money.</span>
          </h2>
          <p className="text-gray-400 max-w-[80%] xl:text-lg xl:max-w-[90%] xl:leading-8">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Button />
        </div>
        <div className="flex flex-col gap-4 lg:w-[40%] lg:gap-8">
          {articlesData.map((article, index) => (
            <article
              key={index}
              className="flex items-center gap-4 p-1 lg:p-4 rounded-lg transition-transform select-none hover:bg-gradient-to-br hover:from-gray-300/20 hover:translate-x-3 hover:to-gray-300/5 "
            >
              <div className="flex items-center justify-center bg-cyan-800/10 rounded-full w-[80px] h-[80px] shrink-0">
                <Image
                  src={article.icon}
                  alt={article.alt}
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col lg:gap-2">
                <h3 className="font-semibold text-lg">{article.title}</h3>
                <p className="text-gray-400">{article.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
