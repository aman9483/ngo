import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about"; 
import Vission from "./pages/vission"
import LeadershipPage from "./pages/leadership";
import Member from "./pages/member"
import ContactPage from "./pages/contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vission" element={<Vission />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/contact" element={<Member />} />
        <Route path="/contactPage" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
