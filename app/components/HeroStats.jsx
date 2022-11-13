import React from "react";

const HeroStats = () => {
  const data = [
    {
      text: "3800+",
      span: "user active",
      border: true,
    },
    {
      text: "230+",
      span: "trusted by company",
      border: true,
    },
    {
      text: "$230M+",
      span: "transaction",
      border: false,
    },
  ];

  return (
    <article className="">
      <div className="w-[min(90%,1400px)] mx-auto flex flex-col items-center md:text-start font-semibold text-lg md:grid md:grid-cols-3 md:bg-slate-800/50 md:rounded-md md:mt-24 md:text-xl md:py-3 lg:text-3xl xl:text-4xl xl:gap-6">
        {data.map((dataItem, index) => (
          <p
            className="relative flex items-center justify-center gap-2 py-3 md:px-4 lg:gap-6 lg:px-8"
            key={index}
          >
            {dataItem.text}
            <span className="text-sm font-normal uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#33BBCF] to-[#ecf7f7] lg:text-base xl:text-lg">
              {dataItem.span}
            </span>
            {dataItem.border && (
              <span className="w-4 h-[1px] bg-slate-300 absolute left-[45%] bottom-0 md:w-[1px] md:h-4 md:right-0 md:left-auto md:bottom-[35%] xl:bottom-[38%] xl:right-[-.6rem]"></span>
            )}
          </p>
        ))}
      </div>
    </article>
  );
};

export default HeroStats;
