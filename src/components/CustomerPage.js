import React from "react";

const CustomerPage = () => {
  return (
    <div className="min-h-full max-w-full bg-backgroundHome">
      <h1 className="xs:text-center sm:ml-20 pb-14 xs:text-2xl text-4xl font-semibold">What Our Customers Say</h1>
      <div className="  lg:flex justify-center items-center sm:mb-10 ">
        <div className="flex justify-center items-center lg:h-80 lg:w-1/2 ">
          <div className="lg:flex flex justify-center items-center xs:mb-20 sm:mb-20 lg:mb-0  xs:w-10/12 xs:h-10/12 h-64 w-4/6  lg:h-72 lg:w-10/12 lg:ml-12 relative rounded-2xl drop-shadow-2xl bg-white ">
          <img src="./../images/group4.png" className="absolute h-20 w-20  xs:h-12 xs:w-12 -right-4 -top-4  " />
            <div className="  lg:h-52 lg:w-9/12 h-48 w-4/5 xs:h-44 xs:w-10/12 ">
              <p className="sm:leading-7 xs:leading-6 md:leading-8 sm:text-xl">
            
                I wanted to thanks everyone at this facility for the quality of
                care and compassion they showed during my stay.
              </p>
              <div className="flex mt-6">
                <img
                  src="./../images/small2.png"
                  className=" h-16 w-16 xs:h-14 xs:w-14"
                  alt="img2"
                />
                <div className="flex-col ml-6">
                  <h1 className="text-2xl xs:text-xl font-semibold">Jacqueline Asong</h1>
                  <p className="sm:text-lg ">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  lg:h-80 lg:w-1/2 ">
          <div className="lg:flex flex justify-center items-center xs:w-10/12 xs:h-10/12 h-64 w-4/6  lg:h-72 lg:w-10/12 lg:mr-12 relative rounded-2xl drop-shadow-2xl bg-white ">
          <img src="./../images/group4.png" className="absolute h-20 w-20  xs:h-12 xs:w-12 -right-4 -top-4  " />
            <div className="  lg:h-52 lg:w-9/12 h-48 w-4/5 xs:h-44 xs:w-10/12 ">
              <p className="sm:leading-7 xs:leading-6 md:leading-8 sm:text-xl">
              I wanted to thanks everyone at this facility for the quality of
              care and compassion they showed during my stay.
              </p>
              <div className="flex mt-6">
                <img
                  src="./../images/small1.png"
                  className=" h-16 w-16 xs:h-14 xs:w-14"
                  alt="img2"
                />
                <div className="flex-col ml-6">
                  <h1 className="text-2xl xs:text-xl font-semibold">Patrícia Ribeiro</h1>
                  <p className="sm:text-lg ">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CustomerPage;
