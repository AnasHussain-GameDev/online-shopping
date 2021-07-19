import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center m-3">About Us</h1>
      <div className="container rounded-2 bg-dark text-white p-2">
        <h3>This is a College Mini Project.</h3>
        <h4>
          Created by :{" "}
          <ul>
            <li>Anas Hussain</li>
            <li>Lalit Kumar</li>
            <li>Deepak</li>
          </ul>
          For MCS-044 course of MCA.
        </h4>
        <h3>IGNOU</h3>
      </div>
    </div>
  );
};

export default AboutUs;
