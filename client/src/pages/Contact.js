import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col mb-4">
          <form
            action="mailto:rachelapanico@gmail.com"
            method="POST"
            name="myForm"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                placeholder="email@example.com"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textArea" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="textArea"
                rows="8"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" value="Submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;