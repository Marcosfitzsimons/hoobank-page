import Image from "next/image";

const SecondSection = () => {
  return (
    <section className="py-20">
      <div className="w-[min(90%,1400px)] mx-auto flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
        <div className="relative order-2 w-full max-w-md h-[340px] lg:h-[480px] lg:max-w-[560px] lg:order-1">
          <Image
            src="/assets/bill.png"
            fill
            alt="bill"
            className=""
            sizes="(max-width: 1080px) 100vw, 40vw"
          />
        </div>
        <div className="text-center flex flex-col items-center gap-6 lg:text-start lg:items-start lg:w-[40%] lg:gap-8 lg:order-2">
          <h2 className="text-3xl flex flex-col gap-2 font-semibold lg:text-4xl xl:text-5xl xl:leading-[60px]">
            Easily control your billing & invoicing.
          </h2>
          <p className="text-gray-400 max-w-[90%] xl:text-lg xl:leading-8">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="relative w-32 h-16 lg:w-40 lg:h-20 cursor-pointer">
              <button type="button">
                <Image
                  src="/assets/apple.svg"
                  fill
                  alt="apple logo"
                  sizes="(max-width: 1080px) 40vw, 15vw"
                />
              </button>
            </div>
            <div className="relative w-32 h-16 lg:w-40 lg:h-20 cursor-pointer">
              <button type="button">
                <Image
                  src="/assets/google.svg"
                  fill
                  alt="apple logo"
                  sizes="(max-width: 1080px) 40vw, 15vw"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
