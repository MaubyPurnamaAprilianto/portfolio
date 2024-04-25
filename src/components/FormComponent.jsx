import "./FormStyle.css";

import React from "react";

const FormComponent = () => {
  return (
    <div className="form" id="contact">
      <h1 className="form-heading">Contact</h1>
      <form action="">
        <label>Your Name</label>
        <input type="text"></input>

        <label>Email</label>
        <input type="email"></input>

        <label>Subject</label>
        <input type="text"></input>

        <label>message</label>
        <textarea rows="6" placeholder="Type your message here" />
        <button className="btn">Sumbit</button>
      </form>
    </div>
  );
};

export default FormComponent;
