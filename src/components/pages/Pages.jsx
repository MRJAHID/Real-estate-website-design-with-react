import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../home/Home";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={<Home />} />
      </Router>
    </>
  );
};

export default Pages;
