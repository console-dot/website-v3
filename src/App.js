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
import { Careers } from "./Pages/Careers";
import { Faqs } from "./Pages/Faqs";
import { CustomSoftware } from "./Pages/CustomSoftware";
import { Contact } from "./Pages/Contact";
import { useEffect, useState } from "react";
import { PageNotFound } from "./Pages/NotFound/PageNotFound";
import ScrollToTop from "./Pages/ScrollToTop";
import Preloader from "./Pages/PreLoader/PreLoader";
import { TestimonialsAll } from "./components/TestimonialsAll.jsx/TestimonialsAll";
import { CaseStudies } from "./Pages";
import { CardCaseStudy } from "./Pages/CaseStudies/CardCaseStudy";
import { ServicesAll } from "./components/ServicesAll/ServicesAll";
import {
  getAR,
  getArtificialIntelligence,
  getBlockChain,
  getLandingPage,
  getMobDevelopment,
  getOffShore,
  getUI,
  getWebDevelopment,
  getcasestudy,
  getcustomservicepage,
  getproductresearchpage,
  getFaqs, 
  getOpenPositions
} from "./api";
import { useDispatch } from "react-redux";
import { setCareerPageData, setFaqPageData,
  setARData,
  setAiData,
  setBlockChainData,
  setCustomServiceData,
  setLandingPageData,
  setOffShoreData,
  setUIData,
  setcasestudyData,
  setproductresearchData,
  setwebdevData,
} from "./redux";
import { setmobdevData } from "./redux/mobdevSlice";

function App() {
  const [section, setSection] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getLandingPage()
      .then((res) => {
        dispatch(setLandingPageData(res?.data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //offshore get call
    getOffShore()
      .then((res) => {
        dispatch(setOffShoreData(res?.data));
      })
      .catch((err) => console.log(err));

    //customservice get call
    getcustomservicepage()
      .then((res) => {
        dispatch(setCustomServiceData(res?.data));
      })
      .catch((err) => console.log(err));

    //productResearch get call
    getproductresearchpage()
      .then((res) => {
        dispatch(setproductresearchData(res?.data));
      })
      .catch((err) => console.log(err));

    //webdev get call
    getWebDevelopment()
      .then((res) => {
        dispatch(setwebdevData(res?.data));
      })
      .catch((err) => console.log(err));

    //mobdev get call
    getMobDevelopment()
      .then((res) => {
        dispatch(setmobdevData(res?.data));
      })
      .catch((err) => console.log(err));

    //BlockChain get call
    getBlockChain()
      .then((res) => {
        dispatch(setBlockChainData(res?.data));
      })
      .catch((err) => console.log(err));

    //Ai get call
    getArtificialIntelligence()
      .then((res) => {
        dispatch(setAiData(res?.data));
      })
      .catch((err) => console.log(err));

    //ArVr get call
    getAR()
      .then((res) => {
        dispatch(setARData(res?.data));
      })
      .catch((err) => console.log(err));

    //UIUx Get call
    getUI()
      .then((res) => {
        dispatch(setUIData(res?.data));
      })
      .catch((err) => console.log(err));

    //CaseStudies get call
    getcasestudy()
      .then((res) => {
        dispatch(setcasestudyData(res?.data));
      })
      .catch((err) => console.log(err));
    getOpenPositions()
      .then((res) => {
        dispatch(setCareerPageData(res?.data));
      })
      .catch((err) => console.log(err));

    getFaqs()
      .then((res) => {
        dispatch(setFaqPageData(res?.data));
      })
      .catch((err) => console.log(err));
  }, []);

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
            <Route path="/custom-software" element={<CustomSoftware />} />
            <Route path="/product-research" element={<ProductResearch />} />
            <Route path="/web-app-development" element={<WebDevelopment />} />
            <Route
              path="/mobile-app-development"
              element={<MobileAppDevelopment />}
            />
            <Route path="/blockchain" element={<BlockchainDevelopment />} />
            <Route path="/ai" element={<AIDevelopment />} />
            <Route path="/arvr" element={<ArVrDevelopment />} />
            <Route path="/ui-ux" element={<UiUxDevelopment />} />
            <Route path="/case-study" element={<CaseStudies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Testimonials" element={<TestimonialsAll />} />
            <Route path="/CaseStudies" element={<CaseStudies />} />
            <Route path="/CaseStudies/:id" element={<CardCaseStudy />} />
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
