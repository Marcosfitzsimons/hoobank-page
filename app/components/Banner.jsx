import Button from "./Button";

const Banner = () => {
  return (
    <section className="py-20">
      <div className="w-[min(90%,1400px)] p-6 mx-auto rounded-3xl text-center flex flex-col items-center gap-6 bg-gradient-to-bl from-gray-400/20 to-gray-800/30 lg:flex-row lg:text-start lg:justify-between lg:p-20">
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <h4 className="text-3xl flex flex-col gap-2 font-semibold lg:text-4xl xl:text-5xl">
            Let’s try our service now!
          </h4>
          <p className="text-gray-400 max-w-[90%] lg:w-[60%] xl:text-lg xl:leading-8">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button />
      </div>
    </section>
  );
};

export default Banner;
