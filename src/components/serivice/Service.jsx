import React from "react";
import Back from "../common/Back";
import "../home/recent/Recent.css";
import img from "../images/about.jpg";
import Services from "../services/Services";

const Blog = () => {
  return (
    <>
      <section className="blog-out mb">
        <Back name="Services" title="Services -All Services" cover={img} />
        <div className="container recent">
          <Services />
        </div>
      </section>
    </>
  );
};

export default Blog;
