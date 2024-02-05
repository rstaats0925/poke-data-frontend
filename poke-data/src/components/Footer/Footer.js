import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__sources">
        <p className="footer__sources-header">Sources:</p>
        <a
          className="footer__source"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noreferrer"
        >
          pokeapi
        </a>
        <a
          className="footer__source seribii"
          href="https://www.serebii.net/gs/gyms.shtml"
          target="_blank"
          rel="noreferrer"
        >
          serebii
        </a>
      </div>
      <div className="footer__author">
        <p className="footer__name">Created by Ryan Staats</p>
      </div>
      <div className="footer__source">
        <p className="footer__source-code">Source code found here: </p>
        <a
          className="footer__github"
          href="https://github.com/rstaats0925"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
