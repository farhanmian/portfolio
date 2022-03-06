import "./App.css";
import React from "react";
import About from "./components/app/About/About";
import Contact from "./components/app/Contact/Contact";
import Footer from "./components/app/Footer/Footer";
import Home from "./components/app/Home/Home";
import Project from "./components/app/Projects/Project";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
