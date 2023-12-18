import React from "react";
const ClinicPage = () => {
  const data = [
    {
      id: 1,
      img: "./../images/doctor-woman.png",
      name: "Qualified Doctors",
    },
    {
      id: 2,
      img: "./../images/doctor-woman copy 2.png",
      name: "24 Hours Service",
    },
  ];
  return (
    <div className="min-h-screen lg:flex max-w-full bg-white ">
      <div className="lg:flex justify-center items-center  pt-12 ">
        <div className="flex  lg:justify-start justify-center lg:items-center lg:w-1/2   ">
          <div className=" flex-col xs:w-9/12 justify-center items-center sm:w-4/6 lg:w-3/4 ">
            <h1 className="flex xs:justify-center sm:justify-center lg:justify-start text-4xl xs:text-2xl font-semibold text-blue-900">
              Clinic With Innovative
            </h1>
            <p className=" mt-6 ">
              We provide the most full medical services, so every person could
              heave the oppurtunity to receive qualitative medical help.
            </p>
            <button className="rounded-circle mt-6 text-white w-32 rounded-3xl h-10 bg-primary">
              Learn More
            </button>
          </div>
        </div>
        <div className=" flex  justify-center items-center lg:gap-20  h-full xs:mt-16 sm:mt-20 lg:mt-0 lg:pt-12">
          <div className="flex-col w-1/2 h-full  ">
            {data.map((item) => {
              return (
                <div key={item.id} className="flex h-80 justify-between items-center">
                  <div className="xs:h-36 xs:w-40 h-40 w-48  rounded-2xl drop-shadow-2xl  relative   bg-white">
                    <img
                      src={item.img}
                      className=" absolute bottom-20"
                      alt="images"
                    />
                    <p className=" absolute top-24 left-4 xs:left-2">
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="xs:h-36 xs:w-40 h-40 w-48 relative rounded-2xl drop-shadow-2xl bg-white">
            <img
              src="./../images/doctor-woman copy.png  "
              className="absolute bottom-20"
              alt="images"
            />
            <p className=" absolute top-24 left-4 xs:left-2">Emergency Care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;
