/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="p-10 container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2  ">
         
          <div className="single-footer">
            <div className="flex space-x-[80px]">
             
              <div className="flex-1 lg:flex-none ">
                <h4 className="mb-8 text-2xl font-bold text-white ">Legal</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="#">Legal</a>
                  </li>

                  <li>
                    <a href="#">Política de privacidad</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="single-footer" >
            <h4 className="mb-8 text-2xl font-bold text-white">Boletín informativo</h4>
            <div className="mb-8">
              Recorriendo todo{" "}
              <span className="text-primary underline">Mexico</span> para
              transmitir nuestro mensaje de educación y valores
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
