import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Features from "./components/features";
import About from "./components/about";
import Home from "./components/home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
    
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/features" exact component={Features} />
        <Route path="/about" exact component={About} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
