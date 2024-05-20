/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { man3 } from "../../constant/images";
import { Link } from "react-router-dom";
import favi from "../../assets/images/svg/favi.svg";

const Banner = () => {
  return (
    <section className=" xl:min-h-screen bg-[url('../images/banner/3.png')] bg-no-repeat bg-center overflow-hidden">
      <div className="container relative">
        <div className="xl:max-w-[570px] lg:max-w-[770px] xl:py-[160px] lg:py-28 md:py-20 py-14">
          <h1 className="inline-block">
            Programa Educativo
            <div className=" lg:flex md:flex">
              <span className=" text-secondary  bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom ">
                México
              </span>
              <img src={favi} alt=""  />
            </div>
          </h1>
          <div className=" plain-text text-gray leading-[30px] mt-8 mb-14">
            La educación en el lenguaje emocional nos permite construir
            relaciones más auténticas y significativas en todos los aspectos de
            nuestra vida.
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0">
            <Link
              to={"/react-templates/edumim/about-two"}
              className="btn btn-primary"
            >
              Aprende sobre nosotros
            </Link>
          </div>
        </div>
        <div className="imge-box absolute right-[-60px] top-1/2  -translate-y-1/2 hidden xl:block  ">
          <img
            src={man3}
            alt=""
            className="rounded-lg "
            style={{ width: "550px", height: "580px", marginTop: "75px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
