import { useState } from "react";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Project from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      ></Route>

      <Route
        path="/projects"
        element={
          <>
            <Header />
            <Project />
          </>
        }
      ></Route>

      <Route
        path="/experience"
        element={
          <>
            <Header />
            <Experience />
            <Footer />
          </>
        }
      ></Route>

      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        }
      ></Route>

      <Route
        path="/contact"
        element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
