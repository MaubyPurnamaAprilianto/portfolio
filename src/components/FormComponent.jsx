import "./FormStyle.css";
import { useForm, ValidationError } from "@formspree/react";

import React from "react";

const FormComponent = () => {
  const [state, handleSubmit] = useForm("xyzgyjyg");
  if (state.succeeded) {
    window.location.reload();
    return alert("Thanks for your message!");
  }
  return (
    <div className="form" id="contact">
      <h1 className="form-heading">Contact</h1>
      <form action="https://formspree.io/f/xyzgyjyg" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name"></input>

        <label htmlFor="email">Email</label>
        <input type="email " id="email" name="email"></input>

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject"></input>

        <label htmlFor="message">message</label>
        <textarea rows="6" placeholder="Type your message here" id="message" name="message" />
        <button className="btn" type="submit" disabled={state.submitting}>
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
