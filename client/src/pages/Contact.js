import React from "react";
import "./Contact.css";

function Contact () {
  return (
    <div className="contact">
    <div className="rowrow">
      <div className="col-sm-12 col-md-8 mt-5">
        <form
          action="mailto:rachelapanico@gmail.com"
          method="POST"
          name="myForm"
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              name="name"
              required
            />
          </div>
          <div >
            <label htmlFor="emailAddress">Email address:</label>
            <input
              type="email"
              class="form-control"
              id="emailAddress"
              placeholder="email@example.com"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="textArea">Message:</label>
            <textarea
              class="form-control"
              id="textArea"
              rows="8"
              name="message"
              required
            ></textarea>
          </div>
          <button
          
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Contact;