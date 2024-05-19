import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import About from "../HomeThreeComponents/About";
import {
  bs1,
  bs2,
  bs3,
  user3,
  comment,
  q,
  calender,
  clockIcon,
} from "../../constant/images";

import PageBanner from "../PageBanner";

import Topics from "../Topics";

const AboutTwo = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Sobre Nosotros"} pageTitle="Nosotros" />
      <About />
      <Topics />
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12">
              <div className="bg-[#F8F8F8] rounded-md">
                <img src={bs1} alt="" className=" rounded-t-md mb-10" />
                <div className="px-10 pb-10">
                  <h3>
                    Nuestra labor especifica es dar apoyo a las campañas que
                    están trazadas a nivel nacional
                  </h3>
                  <p className="mt-6">
                    En el sector educativo, específicamente nos corresponde ser
                    parte del equipo PROGRAMA NACIONAL DE VALORES, nuestra
                    misión es realizar pláticas dirigidas especialmente a los
                    Padres de Familia , con el fin de poder dar apoyo a la labor
                    tan importante que hace el docente con el alumno, en el
                    sentido de que los Padres de Familia somos los encargados de
                    inculcar valores desde edades tempranas en el seno de la
                    familia, simultáneamente en trabajar en un engranaje con los
                    mismos docentes
                  </p>
                  {/* <blockquote className=" bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.png')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <img src={q} alt="" />
                  <div className=" text-xl font-semibold my-6">
                    “ Education is one of the most powerful aspects of life.
                    Education and learning allow us to make sense of the world
                    around us, the world inside of us, and where we fit within
                    the world.”
                  </div>
                  <div className=" flex items-center space-x-3">
                    <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                    <span className=" text-xl font-semibold">
                      Rosalina D. Jackson
                    </span>
                  </div>
                </blockquote> */}
                  <p>
                    Para una lograr una óptima educación no solo en
                    conocimientos, sino también en el valor del ser humano. A
                    través de nuestra experiencia en el tema, hemos llegado a la
                    conclusión de que el Padre de familia debe estar más
                    involucrado en este proceso, para que con el trabajo de los
                    docentes, logremos excelentes resultados.
                  </p>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                    <img src={bs2} alt="" />
                    <img src={bs3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutTwo;
