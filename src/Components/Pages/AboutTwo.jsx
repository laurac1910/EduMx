import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import About from "../HomeThreeComponents/About";
import CourseBlock from "../HomeThreeComponents/CourseBlock";

import PageBanner from "../PageBanner";
import Platform from "../Platform";

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
