import React from "react";
import "./Header.css";
function Header() {
  return (
    <div style={{ width: "100%", backgroundColor: "#A7D5FF" }}>
      <nav
        className="navbar navbar-expand-lg px-2"
        style={{ backgroundColor: "transparent", padding: "2rem 1.5rem" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={"/fintaddyLogo.svg"}
              alt="fintaddyLogo"
              style={{ width: "10rem" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav px-2">
            <a
              className="nav-link active headerWidth navigationTitle"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link headerWidth navigationTitle" href="#">
              About us
            </a>
            <a className="nav-link headerWidth navigationTitle" href="#">
              Services
            </a>
            <a className="nav-link navigationTitle" aria-disabled="true">
              Testimonials
            </a>
            <a
              className="nav-link headerWidth navigationTitle"
              aria-disabled="true"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default React.memo(Header);
