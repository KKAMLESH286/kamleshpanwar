import React, { Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import BasePage from "./BasePage";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectOverview from "./components/ProjectDetails/ProjectOverview";
import { LayoutSplashScreen } from "./components/SplashScreen/SplashScreen";
import RoutesPage from "./RoutesPage";

export default function App({ basename }) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path={`/overview-details/:id`} element={<ProjectOverview />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}