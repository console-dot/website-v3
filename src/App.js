import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import Header from "./components/Header/Header";
import { OffshoringModels } from "./Pages/OffshoringModels";
import Footer from "./components/Footer/Footer";
import { WebDevelopment } from "./Pages/WebDevelopment";
import { MobileAppDevelopment } from "./Pages/MobileAppDevelopment";
import { BlockchainDevelopment } from "./Pages/BlockchainDevelopment";
import { AIDevelopment } from "./Pages/AIDevelopment";
import { ArVrDevelopment } from "./Pages/ArVrDevelopment";
import { UiUxDevelopment } from "./Pages/UiUxDevelopment";
import { ProductResearch } from "./Pages/ProductResearch";
import { CaseStudy } from "./Pages/CaseStudy";
import { Careers } from "./Pages/Careers";
import { Faqs } from "./Pages/Faqs";
import { CustomSoftware } from "./Pages/CustomSoftware";
import { Contact } from "./Pages/Contact";
import { Services } from "./Pages/Services";
import { useEffect, useState } from "react";
import { PageNotFound } from "./Pages/NotFound/PageNotFound";
import ScrollToTop from "./Pages/ScrollToTop";
import Loader from "./Pages/Loader/Loader";
import { PreLoader } from "./assets/images";
import Preloader from "./Pages/PreLoader/PreLoader";
import { TestimonialsAll } from "./components/TestimonialsAll.jsx/TestimonialsAll";
import { CaseStudies } from "./Pages";
import { CardCaseStudy } from "./Pages/CaseStudies/CardCaseStudy";
import { ServicesAll } from "./components/ServicesAll/ServicesAll";

function App() {
  const [section, setSection] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Hide the loader after 5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    // Clear the timer on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  return (
    <Router>
      {showLoader && <Preloader />}
      <ScrollToTop />
      {!showLoader && (
        <div className="bg-backgroundColor">
          <Header />
          <NavBar setSection={setSection} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Offshoringmodels" element={<OffshoringModels />} />
            <Route path="/web-app-development" element={<WebDevelopment />} />
            <Route
              path="/mobile-app-development"
              element={<MobileAppDevelopment />}
            />
            <Route path="/blockchain" element={<BlockchainDevelopment />} />
            <Route path="/ai" element={<AIDevelopment />} />
            <Route path="/arvr" element={<ArVrDevelopment />} />
            <Route path="/ui-ux" element={<UiUxDevelopment />} />
            <Route path="/product-research" element={<ProductResearch />} />
            <Route path="/case-study" element={<CaseStudies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/custom-software" element={<CustomSoftware />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Testimonials" element={<TestimonialsAll />} />
            <Route path="/CaseStudies" element={<CaseStudies />} />
            <Route path="/CaseStudies/:title" element={<CardCaseStudy />} />
            <Route path="/services" element={<ServicesAll />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}
export default App;
