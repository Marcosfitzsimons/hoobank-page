"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Feedback = () => {
  const articlesData = [
    {
      userImg: "/assets/people01.png",
      text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      position: "Founder & Leader",
    },
    {
      userImg: "/assets/people02.png",
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      position: "Founder & Leader",
    },
    {
      userImg: "/assets/people03.png",
      text: "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      position: "Founder & Leader",
    },
  ];

  const feedbackVariants = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="w-[min(90%,1400px)] mx-auto flex flex-col gap-10">
        <motion.div
          variants={feedbackVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6 lg:flex-row lg:justify-between lg:text-start"
        >
          <h3 className="text-3xl font-semibold lg:text-4xl lg:w-[40%] xl:text-5xl xl:leading-[60px]">
            What people are saying about us
          </h3>
          <p className="text-gray-400 max-w-[85%] lg:w-[35%] lg:mr-16 xl:text-lg xl:max-w-[90%] xl:leading-8">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </motion.div>
        <motion.div
          variants={feedbackVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 lg:place-items-center"
        >
          {articlesData.map((card, index) => (
            <article
              key={index}
              className="flex flex-col gap-4 max-w-[400px] rounded-2xl p-4 lg:gap-8 lg:px-12 lg:py-20 lg:justify-between lg:h-full transition-colors hover:bg-gradient-to-br hover:from-gray-800/90 hover:to-gray-800/20"
            >
              <div className="flex flex-col gap-4 lg:gap-10">
                <Image
                  src="/assets/quotes.svg"
                  width={43}
                  height={28}
                  alt="quotes"
                />
                <p className="lg:leading-7 xl:text-lg">{card.text}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                  <Image src={card.userImg} fill alt={card.name} />
                </div>
                <div className="">
                  <p className="lg:text-lg">{card.name}</p>
                  <p className="text-gray-500 text-sm lg:text-base">
                    {card.position}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
