import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route,useLocation  } from "react-router-dom";
import BasePage from "./BasePage";
import Contact from "./components/Contact";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectOverview from "./components/ProjectDetails/ProjectOverview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { LayoutSplashScreen } from "./components/SplashScreen/SplashScreen";
import Testimonials from "./components/Testimonials";
import RoutesPage from "./RoutesPage";

export default function App({ }) {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  return (
    <Suspense fallback={<LayoutSplashScreen/>}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/overview-details/:id" element={<ProjectOverview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}