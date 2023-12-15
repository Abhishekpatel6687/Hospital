import React from "react";

const Navbar = () => {
  const state = ["Home", "About", "Services", "News"];
  return (
    <div className="flex items-center justify-between px-16 py-6">
      <div>
        <p className="font-bold text-4xl text-primaryText ">
          Medi<span className="text-orangeText">Care+</span>
        </p>
      </div>
      <div className="flex gap-8 list-none items-center">
        {state.map((item) => {
          return (
            <div>
              <p className="text-primaryText">{item}</p>
            </div>
          );
        })}
        <button className="rounded-circle text-white w-32 rounded-3xl h-10 bg-primary">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
