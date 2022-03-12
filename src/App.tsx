import React from "react";
import "./App.css";
import Nav from "./components/app/Nav/Nav";
import Header from "./components/app/Header/Header";
import Projects from "./components/app/Projects/Projects";
import About from "./components/app/About/About";
import Contact from "./components/app/Contact/Contact";
import Divider from "./components/partials/Divider/Divider";

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
