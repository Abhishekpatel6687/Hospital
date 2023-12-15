import React from "react";
// import Navbar from "./Navbar";
import Services from "./Services";
import ClinicPage from "./ClinicPage";
import DoctorPage from "./DoctorPage";
import CustomerPage from "./CustomerPage";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="min-h-full max-w-full bg-backgroundHome ">
      {/* <Navbar /> */}
      <div className="md:flex justify-center items-center">
        <div className="flex-col justify-center items-center md:w-1/2 p-18 md:p-10 ">
          <div className="ml-12 w-5/6 h-80 ">
            <p className="font-bold">Welcome to MediCare+ Clinic</p>
            <h1 className="font-bold mt-6 text-4xl  md:text-5xl">
              Best Specialists
            </h1>
            <p className="  text-base font-normal mt-8">
              We are on the leading edge of cancer care. Providing the full
              continuum of cancer treatments and supportive care services in a
              single convenient location.
            </p>
            <div className="flex w-70 gap-8 mt-9 	">
              <button className="bg-primary sm:p-2 p-1 w-52   rounded-3xl text-white">
                Make an Appointment
              </button>
              <button className="bg-white p-2 w-52  rounded-3xl text-primary-700 ">
                Departments
              </button>
            </div>
          </div>
        </div>

        <div className="flex xs:mt-8 sm:mt-4 pb-4 items-center justify-center md:w-1/2">
          <div className=" h-96 w-72 sm:h-[450px] sm:w-96 bg-backgroundBox rounded-3xl bg-primary-600 flex items-center content-center"></div>
        </div>
      </div>

      <Services />
      <ClinicPage />
      <DoctorPage />
      <CustomerPage />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
