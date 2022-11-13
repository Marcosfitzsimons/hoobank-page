import React from "react";
import Button from "./Button";

const IntroSection = () => {
  return (
    <div className="text-center flex flex-col items-center gap-3 lg:text-start lg:items-start lg:w-[50%] lg:gap-8">
      <h2 className="text-3xl flex flex-col gap-2 font-semibold lg:text-4xl xl:text-5xl xl:leading-[60px]">
        You do the business, <span>we’ll handle the money.</span>
      </h2>
      <p className="text-gray-400 max-w-[80%] xl:text-lg xl:max-w-[90%] xl:leading-8">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button />
    </div>
  );
};

export default IntroSection;
