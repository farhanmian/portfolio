import React from "react";
import "./App.css";
import Divider from "./components/Divider/Divider";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Divider />
      <Projects />
    </div>
  );
}

export default App;
