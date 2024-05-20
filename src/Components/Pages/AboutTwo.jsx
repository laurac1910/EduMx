import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import About from "../HomeThreeComponents/About";
import { bs1, bs2, bs3, bs4, bs5, bs6 } from "../../constant/images";

import PageBanner from "../PageBanner";

import Topics from "../Topics";

const AboutTwo = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Sobre Nosotros"} pageTitle="Nosotros" />
      <About />
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
                    parte de?importante que hace el docente con el alumno, en el
                    sentido de que los Padres de Familia somos los encargados de
                    inculcar valores desde edades tempranas en el seno de la
                    familia, simultáneamente en trabajar en un engranaje con los
                    mismos docentes
                  </p>
                  <p>
                    Para una lograr una óptima educación no solo en
                    conocimientos, sino también en el valor del ser humano. A
                    través de nuestra experiencia en el tema, hemos llegado a la
                    conclusión de que el Padre de familia debe estar más
                    involucrado en este proceso, para que con el trabajo de los
                    docentes, logremos excelentes resultados.
                  </p>
                  <h3 className="mt-5">Nuestros Reconocimientos:</h3>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                    <img
                      src={bs2}
                      alt=""
                      className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary "
                    />
                    <img
                      src={bs3}
                      alt=""
                      className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary "
                    />
                    <img
                      src={bs4}
                      alt=""
                      className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary "
                    />
                    <img
                      src={bs5}
                      alt=""
                      className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary "
                    />
                    <img
                      src={bs6}
                      alt=""
                      className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Topics />
     

      <Footer />
    </>
  );
};

export default AboutTwo;
