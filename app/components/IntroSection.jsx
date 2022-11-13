import React from "react";
import Button from "./Button";

const IntroSection = ({ title, text }) => {
  return (
    <div className="text-center flex flex-col items-center gap-6 lg:text-start lg:items-start lg:w-[50%] lg:gap-8">
      <h2 className="text-3xl flex flex-col gap-2 font-semibold lg:text-4xl xl:text-5xl xl:leading-[60px]">
        {title}
      </h2>
      <p className="text-gray-400 max-w-[85%] xl:text-lg xl:max-w-[90%] xl:leading-8">
        {text}
      </p>
      <Button />
    </div>
  );
};

export default IntroSection;
