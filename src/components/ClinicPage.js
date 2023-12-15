import React from "react";
// import ImageClinic from "./../../images/doctor-woman copy 2.png"
// import ImageClinic from "./../../images/doctor-woman copy.png"
// import ImageClinic from "./../../images/doctor-woman.png"
const ClinicPage = () => {
  return (
    <div className="min-h-full lg:flex max-w-full bg-white">
      <div className="lg:flex justify-center items-center lg:mt-32 ">
        <div className="flex  justify-center lg:items-center lg:w-1/2   ">
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
        <div className=" flex  justify-center items-center lg:w-1/2 xs:mt-36 sm:mt-36 lg:mt-16 ">
          <div className="flex-col justify-center items-center w-1/2  ">
            <div className=" xs:h-36 xs:w-40 h-40 w-48 mb-40 rounded-2xl drop-shadow-2xl  relative   bg-white">
              <img src="./../images/doctor-woman.png" className=" absolute bottom-20" alt="images" />
              <p className=" absolute top-24 left-4 xs:left-2">Qualified Doctors</p>
            </div>
            <div className="xs:h-36 xs:w-40 h-40 w-48 relative rounded-2xl drop-shadow-2xl bg-white">
              <img src="./../images/doctor-woman copy 2.png" className="absolute bottom-16" alt="images" />
              <p className=" absolute left-4 top-24 xs:left-2">24 Hours Service</p>
            </div>
          </div>
          <div className="  h-1/2 ">
            <div className="xs:h-36 xs:w-40 h-40 w-48 relative rounded-2xl drop-shadow-2xl bg-white">
              <img src="./../images/doctor-woman copy.png  " className="absolute bottom-20" alt="images" />
              <p className=" absolute top-24 left-4 xs:left-2">Emergency Care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;
