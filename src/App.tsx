import React, { useEffect } from "react";
import "./App.css";
import Nav from "./components/app/Nav/Nav";
import Header from "./components/app/Header/Header";
import Projects from "./components/app/Projects/Projects";
import About from "./components/app/About/About";
import Contact from "./components/app/Contact/Contact";
import Divider from "./components/partials/Divider/Divider";

function App() {
  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch("https://registry.npmjs.org/axios")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.error(error));
  //   };
  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   fetch("https://api.npms.io/v2/package/axios", {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

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
