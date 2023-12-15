import React from "react";

const Services = () => {
  const Image = [
    {
      id: 0,
      image: "./../images/Shape0.png",
      hoverImage: "./../images/ShapeWhite0.png",
      name: "Dental Care",
    },
    {
      id: 1,
      image: "./../images/Shape1.png",
      hoverImage: "./../images/ShapeWhite1.png",
      name: "Pulmonary",
    },
    {
      id: 2,
      image: "./../images/Shape2.png",
      hoverImage: "./../images/ShapeWhite2.png",
      name: "Neurological",
    },
    {
      id: 3,
      image: "./../images/Shape3.png",
      hoverImage: "./../images/ShapeWhite3.png",
      name: "Pediatrics",
    },
  ];

  return (
    <div className="min-h-full max-w-full bg-backgroundHome">
      <div className="flex justify-center items-center mt-12">
        <div className="flex-col sm:w-2/3 xs:w-80 lg:w-2/5">
          <h1 className="flex justify-center items-center font-semibold text-3xl">
            Our Services
          </h1>
          <p className="flex justify-center items-center text-center mt-6">
            We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
          </p>
        </div>
      </div>
      <div className="justify-center items-center grid sm:grid-cols-2 lg:grid-cols-4 px-12">
        {Image.map((item) => (
          <div className="w-full flex justify-center items-center my-20" key={item.id}>
            <div className="group cursor-pointer h-64 w-56 drop-shadow-2xl rounded-2xl bg-white custom-hover-bg hover:bg-primary custom-hover-text hover:text-white duration-500 hover:scale-y-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-blue-400/100">
              <img
                src={item.image}
                alt={item.name}
                className="h-36 m-7 w-32 group-hover:hidden"
              />
              <img
                src={item.hoverImage}
                alt={item.name}
                className="h-36 m-7 w-32 group-hover:block hidden"
              />
              <p className="ml-7 font-bold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
