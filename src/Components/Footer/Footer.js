import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <hr className="text-light" />
      <div className="footer ps-md-5 ">
        <div className="questions d-flex">
          <p> Questions ? &nbsp;</p>
          <span>
            Call &nbsp;<a href="000-800-919-1694">000-800-919-1694</a>
          </span>
        </div>
        <div className="footerElememts d-flex">
          <div className="faq  col-3">
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className="helpCenter  col-3">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div className="Account  col-3">
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
          </div>
          <div className="mediaCenter  col-3">
            <p>Media Center</p>
            <p>Terms of use</p>
            <p>Contact us</p>
          </div>
        </div>
        <div className="language col-1 my-5 bg-dark">
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-globe"></i> &nbsp; &nbsp;English
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                 Hindi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-5">
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
