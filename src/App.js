import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Cabinet from "./pages/Cabinet";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Calendar from "./pages/Calendar";
import Department from "./pages/Department";
import NotFound from "./pages/NotFound";

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
          <Route path="/kalender" component={Calendar} exact />
          <Route path="/" component={Home} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
