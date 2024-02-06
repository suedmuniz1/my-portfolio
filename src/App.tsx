import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  const [header, setHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <div
        id="header-content-container"
        className={`flex justify-center sticky top-0 ${
          header ? "header-active" : ""
        }`}
      >
        <Header />
      </div>
      <div id="header-and-content-container" className="w-3/4 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
