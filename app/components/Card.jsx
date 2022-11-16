"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import IntroSection from "./IntroSection";

const imgVariants = {
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

const Card = () => {
  return (
    <section className="py-20">
      <div className="w-[min(90%,1400px)] mx-auto flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
        <IntroSection
          title="Find a better card deal in few easy steps."
          text="Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
        />
        <motion.div
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full max-w-md h-[340px] lg:h-[480px] lg:w-[50%] lg:max-w-[560px]"
        >
          <Image
            src="/assets/card.png"
            fill
            alt="card"
            className=""
            sizes="(max-width: 1080px) 100vw, 40vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Card;
