import React from "react";

const Contact = () => {
  return (
    <div className="min-h-full max-w-full  bg-backgroundHome">
      <div className="flex justify-center items-center py-24 ">
        <div className=" flex justify-center items-center xs:w-11/12 sm:w-5/6 xs:h-56 sm:h-72 md:h-80 rounded-2xl bg-primary">
          <div className=" flex-col flex  items-center text-white xs:h-44 sm:h-56 xs:w-11/12 sm:w-11/12 md:w-5/6 lg:w-4/6  ">
            <div className="h-28 sm:w-11/12 md:w-5/6 ">
              <h1 className="font-semibold xs:text-2xl sm:text-4xl">
                Subscribe to Newsletter
              </h1>
              <p className="">
                We have a wide experience in experience design and strategy,
              </p>
            </div>
            <div className=" flex justify-around items-center rounded-lg mt-8 xs:h-12 sm:h-14 md:h-16 lg:h-20 w-full bg-white">
              <input
                type="email"
                placeholder="Enter your email address"
                className="xs:h-6 sm:h-8 w-4/6"
              />
              <button className="text-center  rounded-circle  text-white xs:w-24 sm:w-32 rounded-3xl xs:h-8 sm:h-10 bg-primary">
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
