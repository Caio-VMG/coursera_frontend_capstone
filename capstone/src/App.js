import React from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Main } from "./components/Main/Main";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { About } from "./components/About/About";
function App() {
  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
