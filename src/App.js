import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import Header from "./components/Header/Header";
import { OffshoringModels } from "./Pages/OffshoringModels";
import Footer from "./components/Footer/Footer";
import { Services } from "./Pages/Services";
import { useEffect, useState } from "react";

function App() {
  const [section, setSection] = useState("");
  useEffect(() => console.log(section), [section]);
  return (
    <Router>
      {" "}
      {/* Wrap your entire application with Router */}
      <div>
        <Header />
        <NavBar setSection={setSection} /> {/* Render your NavBar component */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Offshoringmodels" element={<OffshoringModels />} />
          <Route path="/Services" element={<Services item={section} />} />
          {/* Define routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
