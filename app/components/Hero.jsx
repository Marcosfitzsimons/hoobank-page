import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="relative py-16">
      <div className="w-[min(90%,1400px)] mx-auto flex flex-col items-center gap-8 md:items-start">
        <div className="flex items-center justify-center gap-2 bg-[#1f1e1e] rounded-md md:py-1 px-2 pr-3">
          <div className="relative w-8 h-8">
            <Image src="/assets/Discount.svg" fill alt="discount" />
          </div>
          <p className="uppercase text-xs sm:text-sm text-gray-400 lg:text-base">
            <span className="text-white">20%</span> discount for{" "}
            <span className="text-white">1 month</span> account
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-7 md:relative md:text-start md:items-start">
          <h1 className="font-semibold text-4xl tracking-wide leading-[50px] flex flex-col md:text-5xl md:leading-[70px] lg:text-7xl lg:leading-[90px]">
            <span className="">The Next</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33BBCF] to-[#ecf7f7]">
              Generation
            </span>
            <span className="text-center">Payment Method.</span>
          </h1>
          <div className="bg-gradient-to-r from-[#33BBCF] to-[#ecf7f7] p-[2px] flex items-center justify-center rounded-full w-32 aspect-square md:absolute md:top-0 md:right-0 xl:w-36 xl:right-6 xl:top-3 hover:scale-105 transition-transform">
            <a
              href="/"
              className="flex flex-col items-center justify-center font-medium text-cyan-400 w-full h-full bg-[#00040e] rounded-full xl:text-lg "
            >
              <span className="relative xl:right-1 flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-[#33BBCF] to-[#ecf7f7]">
                Get{" "}
                <TbArrowUpRight className="text-2xl relative top-[1px] text-white" />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33BBCF] to-[#ecf7f7]">
                Started
              </span>
            </a>
          </div>
        </div>
        <p className="text-gray-300 text-center md:text-start md:w-1/2 lg:w-[40%] xl:text-lg xl:text-gray-400 xl:leading-8">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <Image
        src="/assets/robot.png"
        fill
        alt="robot hand"
        className="object-contain object-top -z-10 opacity-90 sm:object-right-top lg:opacity-100"
        priority
        sizes="(max-width: 1240px) 100vw, 40vw"
      />
    </section>
  );
};

export default Hero;
