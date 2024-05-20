import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeThree from "./Components/Home/HomeThree";
import ErrorPage from "./Components/Pages/404Page";
import AboutTwo from "./Components/Pages/AboutTwo";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import InstructorOne from "./Components/Pages/InstructorOne";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route path="/" element={<HomeThree/>} />

          <Route
            path="/HomeThree"
            element={<HomeThree />}
          />

          <Route
            path="/AboutTwo"
            element={<AboutTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor"
            element={<InstructorOne />}
          />
          <Route
            path="/react-templates/edumim/instructor-two"
            element={<InstructorTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor-details"
            element={<InstructorDetails />}
          />
          <Route path="/react-templates/edumim/event" element={<Event />} />
          <Route
            path="/react-templates/edumim/event-single"
            element={<EventSingle />}
          />
          <Route path="/404Page" element={<ErrorPage />} />
          <Route path="/Courses" element={<Courses />} />

          <Route
            path="/react-templates/edumim/single-course"
            element={<SingleCourse />}
          />

          <Route
            path="/ContactUs"
            element={<ContactUs />}
          />
          <Route path="/react-templates/edumim/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
