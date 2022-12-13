import React from "react";
import "./contact.scss";
import image from "../images/shake1.png";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={image} alt="" />
      </div>
      <div className="right">
        <h2>Contact Us</h2>
        <form onSubmit={handlesubmit}>
          <input type="text" placeholder="Enter Name..." />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>thanks, I,ll Reply Asap😊</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
