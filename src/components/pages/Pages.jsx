import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Service from "../serivice/Service";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Pages;
