import React from 'react';
import "./Footer.css"
import logo from "../images/logof.png";

const Footer = () => {
  return (
    <div className="footer">
    {/* <div className="footer1">
      <h4>Back to top</h4>
    </div> */}
    <div className="footer-middle">
      <div className="footer-row">
        <h3>Get to Know Us</h3>
        <h5>About Us</h5>
        <h5>Careers</h5>
        <h5>Press Release</h5>
        <h5>Amazon Cities</h5>
        <h5>Gift a Smile</h5>
      </div>
      <div className="footer-row">
        <h3>Connect with Us</h3>
        <h5>Facebook</h5>
        <h5>Twitter</h5>
        <h5>Instagram</h5>
      </div>
      <div className="footer-row">
        <h3>Make Money with Us</h3>
        <h5>Sell on Amazon</h5>
        <h5>Sell under Amazon Accelerator</h5>
        <h5>Become an Affiliate</h5>
        <h5>Advertise Your Products</h5>
        <h5>Amazon Pau on Merchants</h5>
      </div>
      <div className="footer-row">
        <h3>Let Us help You</h3>
        <h5>COVID-19 and Amazon</h5>
        <h5>Your Account</h5>
        <h5>Returns Centre</h5>
        <h5>100% App Download</h5>
        <h5>Amazon App Download</h5>
      </div>
    </div>
    <div className="footer-bottom">
      <img src={logo} className="footer-logo" />
      <div className="footer-bottom-two">
        <h6>Build By Kushagra Ankit</h6>
      </div>
    </div>
  </div>
  )
}

export default Footer;