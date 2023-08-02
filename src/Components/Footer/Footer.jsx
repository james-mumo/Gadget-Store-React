import React from "react";
import { useState } from "react";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="section">
        <div className="container">
          <div className="footer-row">
            <div className="col-md-3 col-xs-6 ">
              <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>
                  We are the best dealers in
                  <br /> In Electronic Devices.
                </p>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <FaMapMarker /> {"  "} Garissa Road 12332
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaPhone /> {"  "}
                      +2547-435-974-68
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaEnvelope /> {"  "}
                      test@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Categories</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Hot deals</a>
                  </li>
                  <li>
                    <a href="#">Laptops</a>
                  </li>
                  <li>
                    <a href="#">Smartphones</a>
                  </li>
                  <li>
                    <a href="#">Cameras</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              </div>
            </div>

            {/*<div className="clearfix visible-xs"></div>*/}

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Orders and Returns</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Service</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">View Cart</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
