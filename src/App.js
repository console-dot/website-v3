import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
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


function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div>
      <Header />
        <NavBar /> {/* Render your NavBar component */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Offshoringmodels" element={<OffshoringModels />} />
          <Route path="/webdev" element={<WebDevelopment />} />
          <Route path="/mobdev" element={<MobileAppDevelopment />} />
          <Route path="/blockchain" element={<BlockchainDevelopment />} />
          <Route path="/ai" element={<AIDevelopment />} />
          <Route path="/arvr" element={<ArVrDevelopment />} />
          <Route path="/uiux" element={<UiUxDevelopment />} />
          {/* Define routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
