import React from "react";
import { call, mail } from "../../constant/images";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Contactanos"} pageName="Contacto" />
      <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
          <div class=" grid grid-cols-12 gap-[30px]">
            <div class="xl:col-span-5 lg:col-span-6 col-span-12 ">
           
              <h4 class="column-title ">
                Obten información <span class="shape-bg">Hoy</span>
              </h4>
              <div>
                ¿Listo para comenzar a fortalecer los lazos familiares y
                cultivar valores duraderos? ¡Contáctanos hoy mismo para
                descubrir cómo podemos ayudarte a construir un hogar lleno de
                amor, comunicación abierta y valores sólidos!
              </div>
              <ul class=" list-item space-y-6 pt-8">
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={mail} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Correo Electronico:</h4>
                    <div>Contactyourmail@gmail.com</div>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={call} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Llamanós:</h4>
                    <div>+88012 2910 1781, +88019 6128 1689</div>
                  </div>
                </li>
               
              </ul>
            </div>
            <div class="xl:col-span-7 lg:col-span-6 col-span-12">
              <div class="bg-white shadow-box7 p-8 rounded-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
