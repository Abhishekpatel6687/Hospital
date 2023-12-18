import React from "react";

const DoctorPage = () => {
  const Image = [
    {
      id: 0,
      name: "Dr. Awaatif Al",
      category: "Dental Care",
    },
    {
      id: 1,
      name: "Dr. Filipa Gaspar",
      category: "Cardiology",
    },
    {
      id: 2,
      name: "Dr. Sukhmeet Gorae",
      category: "Neurological",
    },
    {
      id: 3,
      name: "Dr. Siri Jakobsson",
      category: "Prediatrics",
    },
  ];

  return (
    <div className="min-h-full max-w-full xs:pb-20 sm:pb-32 xs:pt-12 sm:pt-20 bg-backgroundHome">
      <div className="flex justify-center items-center ">
        <div className="flex-col sm:w-2/3 xs:w-80 lg:w-2/5">
          <h1 className="flex justify-center items-center font-semibold xs:text-2xl text-3xl">
            We Have The Best Specialist
          </h1>
          <p className="flex justify-center items-center text-center mt-6">
            We have a wide experience in experience design and strategy, with
            locally-rooted knowledge.
          </p>
        </div>
      </div>
      <div className="justify-center items-center grid sm:grid-cols-2 lg:grid-cols-4 px-12">
        {Image.map((item) => (
          <div
            className="w-full flex justify-center items-center my-20"
            key={item.id}
          >
            <div className="group cursor-pointer h-80  w-56 drop-shadow-2xl rounded-2xl bg-white ">
              <div className=" h-56  rounded-t-2xl bg-backgroundCart"></div>
              <h1 className="ml-6 mt-2 font-bold text-xl">{item.name}</h1>
              <p className="ml-6 mt-2">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;
