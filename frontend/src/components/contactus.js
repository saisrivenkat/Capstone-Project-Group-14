import React from "react";
import "../App.css";
//import "./ContactForm.js";

function Contact() {
  return (
    <div style={{
      backgroundColor: "#effafc"
    }}>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4 id="us">Contact Us</h4>
            </div>
          </div>
        </div>
      </section>
      <div style={{ padding: "15px" }}>
        <p id="para" style={{ marginTop: "10px", marginBottom: "20px" }}>
          If you have any questions or comments, please don't hesitate to contact
          us.
        </p>
        <p>You can contact us by any of the below mentioned G-mails</p>
        <list>
          <ul> Sri Sai Venkata Subbarao (srisai50814@gmail.com)</ul>
          <ul> Deepak Reddy (kdeepakreddy1@gmail.com)</ul>
        </list>
      </div>


    </div >
  );
}

export default Contact;