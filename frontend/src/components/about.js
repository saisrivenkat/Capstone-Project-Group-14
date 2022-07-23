import React from "react";
import "../App.css";
import { Route, Link } from "react-router-dom";
function About() {
  return (
    <div style={{
      backgroundColor: "#effafc"
    }}>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4 className="about">About Us</h4>
            </div>
            <div className="col-md-8" my-auto>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-c-light border-bottom">
        <div className="container">
          <hr />
          <h5 className="mainheading" style={{ marginTop: "10px", marginBottom: "20px" }}>Our Company</h5>
          <div className="underline"></div>
          <p>
            Welcome to Shop4Home. We are dedicated in giving you the very best of our products, with a focus on dependability, customer service and uniqueness. Right from the foundation, Shop4Home has come a long way from its beginnings. When we first started out, our passion for helping other parents be more eco-friendly, providing the best equipment for our fellow musicians drove us todo intense research and gave us the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the world and are thrilled to be a part of the quirky,
            We hope you enjoy our products as much as we enjoy offering them to you.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;