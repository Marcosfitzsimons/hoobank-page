import Image from "next/image";
import MobileNav from "./MobileNav";

const Header = () => {
  const navLinks = [
    {
      id: 1,
      content: "Home",
      active: true,
    },
    {
      id: 2,
      content: "About Us",
      active: false,
    },
    {
      id: 3,
      content: "Features",
      active: false,
    },
    {
      id: 4,
      content: "Solution",
      active: false,
    },
  ];

  return (
    <header>
      <div className="w-[min(90%,1400px)] mx-auto py-4 flex items-center justify-between">
        <Image src="/assets/logo.svg" width={140} height={50} alt="logo" />
        <div className="">
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-10">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`${
                    navLink.active ? "text-white" : "text-gray-400"
                  } cursor-pointer`}
                >
                  {navLink.content}
                </li>
              ))}
            </ul>
          </nav>
          <div className="z-50">
            <MobileNav navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
