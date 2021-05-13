import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Cabinet from "./pages/Cabinet";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tentang" component={About} exact />
        <Route path="/kabinet" component={Cabinet} exact />
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
