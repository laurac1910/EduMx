import React from "react";
import { about5, h, videoIcon, whiteWebIcon } from "../../constant/images";

const About = () => {
  return (
    <div className="about-area  section-padding-top pb-16 relative z-[1]">
      <div className=" absolute right-[7%] top-[20%] z-[-1] hidden xl:block">
        <img src={h} alt="" />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-[70px] lg:gap-10 gap-6">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={about5} alt="" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
            <div className="mini-title">About EduMx</div>
            <h4 className="column-title ">
            Hablar es el primer paso para conectar {" "}
              <span className="shape-bg">corazones.</span>
            </h4>
            <div>
            Enfrentar las emociones y expresarlas abiertamente es una parte crucial del crecimiento emocional de nuestros hijos.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={videoIcon} alt="" className="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                  Aprende a expresar, conecta de corazón a corazón.
                  </h4>
                  <div>
                  Proporcionamos a los padres las herramientas necesarias para guiar a sus hijos en el proceso de identificar, comprender y expresar sus sentimientos.                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={whiteWebIcon} alt="" className=" " />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                  Uniendo corazones en cada estado de México, una charla a la vez.
                  </h4>
                  <div>
                  Hemos recorrido todo México, sembrando semillas de amor y comunicación en cada hogar.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
