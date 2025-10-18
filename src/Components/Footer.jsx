import React from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 items-center">
      <nav className="pt-7">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="pt-7">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="pt-7">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav className="pt-7">
        <h6 className="footer-title">Social Links</h6>
        <a className="link link-hover flex items-center gap-2">
          <FaFacebookSquare /> FaceBook{" "}
        </a>
        <a className="link link-hover flex items-center gap-2">
          <FaYoutube /> Youtube{" "}
        </a>
        <a className="link link-hover flex items-center gap-2">
          <FaLinkedin /> Linkdin{" "}
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
