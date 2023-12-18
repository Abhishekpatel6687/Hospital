import React from "react";
import Navbar from "./Navbar";

const Footer = () => {
  const img = [
    {
      id: 1,
      image: "./../images/Path.png",
    },
    {
      id: 2,
      image: "./../images/google.png",
    },
    {
      id: 3,
      image: "./../images/twitter.png",
    },
  ];
  return (
    <div className="min-h-full max-w-full  bg-backgroundHome">
      <Navbar/>
      <div className="bg-backgroundFooter">
        <div className="h-96 flex-col xs:ml-6 ml-20 justify-center pt-20 items-center ">
          <div className=" flex justify-start gap-6 items-center  h-32 w-9/12 ">
            {img.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-center items-center xs:h-12 xs:w-12 h-16 w-16 rounded-full bg-white "
                >
                  <img
                    src={item.image}
                    alt="icon"
                    className="xs:h-5 h-6 "
                  />
                </div>
              );
            })}
          </div>
          <p className=" font-semibold sm:text-xl text-footColor">©2020 PodPayment - 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
