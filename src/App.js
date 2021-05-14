import React from "react";
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Cabinet from "./pages/Cabinet";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Calendar from "./pages/Calendar";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/tentang" component={About} exact />
          <Route path="/kabinet" component={Cabinet} exact />
          <Route path="/kalender" component={Calendar} exact />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
