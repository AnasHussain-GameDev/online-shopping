import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center m-3">About Us</h1>
      <div className="container rounded-2 bg-dark text-white p-2">
        <h3>This is a College Mini Project on Online Grocery Store.</h3>
        <h4>
          Created by :
          <ul>
            <li>
              Anas Hussain
              <ul>
                <li>196636546</li>
                <li>
                  <u>Anas_hussain1997@yahoo.in</u>
                </li>
              </ul>
            </li>
            <li>
              Lalit Kumar
              <ul>
                <li>196634391</li>
                <li>
                  <u>kumarlalit9958@gmail.com</u>
                </li>
              </ul>
            </li>
            <li>
              Deepak Tiwari
              <ul>
                <li>196474821</li>
                <li>
                  <u>tiwarid641@gmail.com</u>
                </li>
              </ul>
            </li>
          </ul>
          For MCS-044 course of MCA.
        </h4>
        <h3>IGNOU</h3>
      </div>
    </div>
  );
};

export default AboutUs;
