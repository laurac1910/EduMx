import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import About from "../HomeThreeComponents/About";


import PageBanner from "../PageBanner";


import Topics from "../Topics";

const AboutTwo = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Sobre Nosotros"} pageTitle='Nosotros'  />
      <About />
      <Topics />
      {/* <Platform />
      <CourseBlock /> */}
      {/* <Video /> */}
      
      <Footer />
    </>
  );
};

export default AboutTwo;
