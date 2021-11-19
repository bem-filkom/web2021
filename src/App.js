import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Cabinet from "./pages/Cabinet";
import Home from "./pages/Home";
import Department from "./pages/Department";
import NotFound from "./pages/NotFound";

ReactGA.initialize("UA-38735593-4", {debug: false});

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/tentang" element={<About/>} />
          <Route path="/kabinet" element={<Cabinet/>} />
          <Route path="/kabinet/:id" element={<Department/>} exact />
          <Route path="/" element={<Home/>} exact />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
