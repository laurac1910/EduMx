import React, { useEffect } from "react";
import Header from "../Header";
import About from "../HomeThreeComponents/About";
import Accordion from "../HomeThreeComponents/Accordion";
import Banner from "../HomeThreeComponents/Banner";
import Team from "../HomeThreeComponents/Team";
import Testimonial from "../HomeThreeComponents/Testimonial";

import Footer from "../Footer";

function HomeThree() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <Banner />
      {/* <Brands /> */}
      <About />
      {/* <CourseSection /> */}
      <Team />
      <Testimonial />
      {/* <Event />
      <CourseBlock /> */}
      <Accordion />
      {/* <BlogArticle /> */}
      <Footer />
    </>
  );
}

export default HomeThree;
