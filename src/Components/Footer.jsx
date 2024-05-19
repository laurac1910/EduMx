/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerLogo from "../assets/images/logo/footer-logo.svg";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <a href="#" className="mb-10 block">
                <div className="max-w-[150px] xl:pt-[100px] md:pt-5 md:pb-5  pb-5 xl:pb-5 space-y-8">
                  <h2 className="text-white">
                    Programa educativo{" "}
                    <span className=" text-secondary inline-block bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom">
                      México
                    </span>{" "}
                  </h2>
                </div>
              </a>
            </div>
          </div>
          <div className="single-footer">
            <div className="flex space-x-[80px]">
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">
                  Contáctanos
                </h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="#">TEL</a>
                  </li>
                  <li>
                    <a href="#">EMAIL</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 lg:flex-none ">
                <h4 className="mb-8 text-2xl font-bold text-white ">Legal</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="#">Legal</a>
                  </li>

                  <li>
                    <a href="#">Politica de privacidad</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="single-footer" style={{ marginLeft: "5rem" }}>
            <h4 className="mb-8 text-2xl font-bold text-white">Newsletter</h4>
            <div className="mb-8">
              Recorriendo todo{" "}
              <span className="text-primary underline">Mexico</span> para
              transmitir nuestro mensaje de educacion y valores
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
        &copy; Copyright {updatedDate} | EduMx | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
