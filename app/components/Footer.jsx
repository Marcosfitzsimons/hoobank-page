import Image from "next/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const links = [
    {
      title: "Usefull Links",
      list: [
        "Content",
        "How it Works",
        "Create",
        "Explore",
        "Terms & services",
      ],
    },
    {
      title: "Community",
      list: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"],
    },
    {
      title: "Partner",
      list: ["Our Partner", "Become a Partner"],
    },
  ];

  return (
    <footer className="py-20">
      <div className="w-[min(90%,1400px)] mx-auto flex flex-col items-center text-center lg:text-start lg:items-start">
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:justify-between lg:pb-6 lg:border-b lg:border-b-gray-600">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:w-[30%]">
            <Image src="/assets/logo.svg" width={180} height={90} alt="logo" />
            <p className="text-gray-400">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:w-[60%]">
            {links.map((column) => (
              <div className="" key={column.title}>
                <p className="pb-4 lg:pb-6 text-lg">{column.title}</p>
                {column.list.map((listItem, index) => (
                  <p key={index} className="pb-2 lg:pb-3 text-gray-400">
                    {listItem}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-start pt-6">
          <p className="flex items-center gap-2 text-gray-400 text-sm lg:text-base">
            Copyright <AiOutlineCopyrightCircle /> 2021 HooBank. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/assets/facebook.svg"
              alt="facebook"
              width={25}
              height={25}
              className="cursor-pointer"
            />
            <Image
              src="/assets/instagram.svg"
              alt="instagram"
              width={25}
              height={25}
              className="cursor-pointer"
            />
            <Image
              src="/assets/twitter.svg"
              alt="twitter"
              width={25}
              height={25}
              className="cursor-pointer"
            />
            <Image
              src="/assets/linkedin.svg"
              alt="linkedin"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
