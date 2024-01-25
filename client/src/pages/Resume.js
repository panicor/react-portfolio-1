import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import resumePDF from '../assets/resumePDF.pdf';
import "./Resume.css";

function Resume () {
  return (
    <div className="height">
    <object className="objHeight" type="application/pdf"
    data={resumePDF}
    >
</object>
</div>
  );
  }

export default Resume;