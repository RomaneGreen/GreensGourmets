import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              1898 Helton st
              <br />
              Brooklyn,NY
              <br />
              NEW YORK
              <br />
              <i className="fa fa-phone fa-lg" />: ++347 943 2451
              <br />
              <i className="fa fa-fax fa-lg" />: ++347 943 2451
              <br />
              <i className="fa fa-envelope fa-lg" />:{" "}
              <a href="mailto:greensgourmetone@gmail.com">
                greensgourmetone@gmail.com
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="https://google.com/+"
              >
                <i className="fa fa-google-plus" />
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="https://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="https://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="https://youtube.com/"
              >
                <i className="fa fa-youtube" />
              </a>
              {/* <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2019 Green's Gourmet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
