import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "News", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <p className="font-bold text-4xl lg:ml-14 text-primaryText">
            Medi<span className="text-orangeText">Care+</span>
          </p>
        </div>

        <div
          onClick={toggleDropdown}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 lg:mx-16  bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-primaryText hover:font-bold duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-primary font-semibold text-white ml-16 w-32 px-4 py-2 rounded-3xl">
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
