"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import IntroSection from "./IntroSection";

const Features = () => {
  const featuresData = [
    {
      title: "Rewards",
      text: "The best credit cards offer some tantalizing combinations of promotions and prizes.",
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

  const articleVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="w-[min(90%,1400px)] mx-auto flex flex-col gap-3 lg:flex-row lg:justify-between">
        <IntroSection
          title="You do the business, we’ll handle the money."
          text="With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market."
        />
        <div className="flex flex-col gap-6 lg:w-[40%] lg:gap-8">
          {featuresData.map((article, index) => (
            <motion.article
              variants={articleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className="flex items-center gap-4 p-2 lg:p-4 rounded-lg select-none hover:bg-gradient-to-br hover:from-gray-800/80 hover:to-gray-800/30 hover:translate-x-2"
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
                <h3 className="font-semibold text-base lg:text-lg">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base">
                  {article.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
