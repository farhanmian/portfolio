import React from "react";
import "./App.css";
import About from "./components/app/About/About";
import Divider from "./components/partials/Divider/Divider";
import Header from "./components/app/Header/Header";
import Nav from "./components/app/Nav/Nav";
import Projects from "./components/app/Projects/Projects";
import Contact from "./components/app/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Contact />
    </div>
  );
}

export default App;
