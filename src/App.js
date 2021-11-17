import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
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
        <Switch location={location} key={location.pathname}>
          <Route path="/tentang" component={About} exact />
          <Route path="/kabinet" component={Cabinet} exact />
          <Route path="/kabinet/:id" component={Department} exact />
          <Route path="/" component={Home} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
