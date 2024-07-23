// import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import "./Home.css";
import "../Footer/Footer.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    navigate("/");
  }, []);

  console.log(hash);
  const innovativeCard = [
    {
      icon: "/assets/home/innovativeIcon1.svg",
      title: "Innovative Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "/assets/home/innovativeIcon2.svg",
      title: "Innovative Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "/assets/home/innovativeIcon3.svg",
      title: "Innovative Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const Business = [
    {
      icon: "/assets/home/business/icon1.svg",
      title: "Tax Planning and Preparation",
      description:
        "Strategic tax planning and accurate tax return preparation for individuals and businesses.",
    },
    {
      icon: "/assets/home/business/icon2.svg",
      title: "Bookkeeping",
      description:
        "Accurate and efficient bookkeeping services to keep your financial records up to date.",
    },
    {
      icon: "/assets/home/business/icon3.svg",
      title: "Audit and Assurance",
      description:
        "Ensuring your business adheres to financial regulations and industry standards.",
    },
  ];

  const Business2 = [
    {
      icon: "/assets/home/business/icon4.svg",
      title: "Business Advisory and Analysis",
      description:
        "Strategic advice to enhance business growth and profitability and expertise in financial planning and analysis.",
    },
    {
      icon: "/assets/home/business/icon5.svg",
      title: "Corporate Finance",
      description:
        "Advisory services for mergers, acquisitions, and business valuations .",
    },
    {
      icon: "/assets/home/business/icon6.svg",
      title: "Payroll Services",
      description:
        "Efficient and accurate payroll processing for businesses of all sizes and managing employee benefits and compensation plans..",
    },
  ];

  const socialMediaIcons = [
    "/assets/footer/fb.svg",
    "/assets/footer/instagram.svg",
    "/assets/footer/linkedin.svg",
    "/assets/footer/x.svg",
  ];

  return (
    <div>
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
              onClick={() => {
                setNavMenu(true);
              }}
              style={{ border: "none", outline: "none" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className={`collapse navbar-collapse ${
              navMenu ? "" : "navBarNotDisplay"
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav px-2">
              <a
                className={`nav-link headerWidth navigationTitle ${
                  hash == "" ? "headerTextAfter" : ""
                }`}
                aria-current="page"
                href="#"
                onClick={() => {
                  setNavMenu(false);
                }}
              >
                Home
              </a>
              <a
                className={`nav-link headerWidth navigationTitle ${
                  hash == "#about" ? "headerTextAfter" : ""
                }`}
                href="#about"
                style={{ width: "90px" }}
                onClick={() => {
                  setNavMenu(false);
                }}
              >
                About us
              </a>
              <a
                className={`nav-link headerWidth navigationTitle ${
                  hash == "#service" ? "headerTextAfter" : ""
                }`}
                href="#service"
                onClick={() => {
                  setNavMenu(false);
                }}
              >
                Services
              </a>
              <a
                className={`nav-link navigationTitle ${
                  hash == "#testimonials" ? "headerTextAfter" : ""
                }`}
                href="#testimonials"
                onClick={() => {
                  setNavMenu(false);
                }}
              >
                Testimonials
              </a>
              <a
                className={`nav-link headerWidth navigationTitle ${
                  hash == "#contact" ? "headerTextAfter" : ""
                } `}
                style={{ width: "91px" }}
                href="#contact"
                onClick={() => {
                  setNavMenu(false);
                }}
              >
                Contact us
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div
        onClick={() => {
          setNavMenu(false);
        }}
        className="mainHomeDiv"
        style={{ width: "100%", height: "auto" }}
      >
        <div
          className="mainHome totalPadding"
          style={{
            width: "100%",
            display: "flex",
            padding: "4rem 0",
            gap: "1rem",
            backgroundImage: "linear-gradient(#A7D5FF, #FFFFFF)",
          }}
        >
          <div
            className="mainSubDiv"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"/assets/homeImage.svg"}
              alt="..."
              style={{ width: "70%" }}
            />
          </div>
          <div
            className="mainSubDiv mainSubDiv1"
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                gap: "1rem",
              }}
            >
              <strong
                style={{
                  fontSize: "clamp(1.375rem, 1.0625rem + 1.25vw, 2.0625rem)",
                }}
              >
                Your Trusted Partner in Business Success...
              </strong>
              <small
                style={{
                  fontSize: "clamp(0.75rem, 0.5795rem + 0.6818vw, 1.125rem)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </small>
              <button
                style={{
                  padding: ".5rem 1.1rem",
                  border: "none",
                  backgroundColor: "#1F81DB",
                  color: "white",
                  width: "13rem",
                }}
              >
                Make an Appointment
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }} className="totalPadding">
          <div
            className="headingDiv"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <strong
              className="headingNavigating"
              style={{
                fontSize: "clamp(1.375rem, 1.1477rem + 0.9091vw, 1.875rem)",
                width: "40%",
                color: "#1F81DB",
              }}
            >
              Navigating Your Business Future Together
            </strong>
            <small
              className="descriptionValues"
              style={{
                width: "40%",
                fontSize: "clamp(0.75rem, 0.6932rem + 0.2273vw, 0.875rem)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </small>
          </div>
          <div
            className="cardMainDiv"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              margin: "4rem 0",
            }}
          >
            {innovativeCard?.map((item, index) => (
              <div
                className="cardDiv"
                key={index}
                style={{
                  width: "300px",
                  height: "350px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  border: "5px",
                }}
              >
                <div style={{ width: "45px" }}>
                  <img
                    src={item?.icon}
                    alt="..."
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      color: "#EF2D55",
                    }}
                  />
                </div>
                <strong>Innovative Solutions</strong>
                <small style={{ width: "68%", textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
                <small>
                  Read More <FaArrowRightLong />
                </small>
              </div>
            ))}
          </div>
        </div>
        <div
          id="about"
          className="experienceDiv totalPadding"
          style={{
            width: "100%",
            display: "flex",
            padding: "4rem 3.5rem",
            gap: "1rem 1.5rem",
          }}
        >
          <div
            className="experienceSubDiv"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "60%" }}>
              <img
                src={"/assets/home/experience.svg"}
                alt="..."
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            className="experienceSubDiv"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div>
              <span
                style={{
                  width: "7rem",
                  height: "2px",
                  backgroundColor: "#EF485C",
                  display: "inline-block",
                }}
              ></span>
              <label>About Us</label>
            </div>
            <label style={{ color: "#1F81DB", fontSize: "32px" }}>
              Experienced and Trusted
            </label>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </small>
            <button
              style={{
                padding: ".5rem 1.1rem",
                border: "none",
                backgroundColor: "#1F81DB",
                color: "white",
                width: "8rem",
                borderRadius: "5px",
              }}
            >
              Know More
            </button>
          </div>
        </div>
        <div
          id="service"
          className="totalPadding"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "4rem 0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <span
                style={{
                  width: "7rem",
                  height: "2px",
                  backgroundColor: "#EF485C",
                  display: "inline-block",
                }}
              ></span>
              <label style={{ fontSize: "18px", paddingLeft: "0.5rem" }}>
                Our Services
              </label>
            </div>
            <strong
              style={{
                fontSize: "32px",
                color: "#1F81DB",
                textAlign: "center",
              }}
            >
              Committed to Your Business Growth
            </strong>
          </div>
          <div
            className="businessTiringMainDiv"
            style={{
              width: "100%",
              display: "flex",
              margin: "4rem 0",
              gap: "1.5rem",
            }}
          >
            <div
              className="subDivBusiness"
              style={{
                display: "flex",
                width: "33.3%",
                flexDirection: "column",
                justifyContent: "space-evenly",
                gap: "2rem",
              }}
            >
              {Business?.map((item, index) => (
                <div key={index} style={{ display: "flex", gap: "1rem" }}>
                  <div className="businessFirstIcons" style={{ width: "60px" }}>
                    <img
                      src={item?.icon}
                      alt="..."
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <strong
                      style={{
                        fontSize:
                          "clamp(0.9375rem, 0.8523rem + 0.3409vw, 1.125rem)",
                      }}
                    >
                      {item?.title}
                    </strong>
                    <small
                      style={{
                        fontSize:
                          "clamp(0.6875rem, 0.5739rem + 0.4545vw, 0.9375rem)",
                      }}
                    >
                      {item?.description}
                    </small>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="subDivBusiness"
              style={{
                width: "30rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "25rem" }}>
                <img
                  src={"/assets/home/business/image.svg"}
                  alt="..."
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div
              className="subDivBusiness"
              style={{
                display: "flex",
                width: "33.3%",
                flexDirection: "column",
                justifyContent: "space-evenly",
                gap: "2rem",
              }}
            >
              {Business2?.map((item, index) => (
                <div key={index} style={{ display: "flex", gap: "1rem" }}>
                  <div
                    className="businessSecondIcons"
                    style={{ width: index == 1 ? "53px" : "90px" }}
                  >
                    <img
                      src={item?.icon}
                      alt="..."
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <strong
                      style={{
                        fontSize:
                          "clamp(0.9375rem, 0.8523rem + 0.3409vw, 1.125rem)",
                      }}
                    >
                      {item?.title}
                    </strong>
                    <small
                      style={{
                        fontSize:
                          "clamp(0.6875rem, 0.5739rem + 0.4545vw, 0.9375rem)",
                      }}
                    >
                      {item?.description}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="totalPadding carousalDiv"
          style={{
            width: "100%",
            display: "flex",
            backgroundColor: "#CDE7FF",
            padding: "4rem 3.5rem",
            gap: "1rem",
          }}
        >
          <div
            className="carouselDiv1"
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <span
                  style={{
                    width: "7rem",
                    height: "2px",
                    backgroundColor: "#EF485C",
                    display: "inline-block",
                  }}
                ></span>
                <label style={{ fontSize: "18px", paddingLeft: "0.5rem" }}>
                  Our Team
                </label>
              </div>
              <div style={{}}>
                <strong
                  style={{
                    fontSize: "32px",
                    color: "#1F81DB",
                    minWidth: "16rem",
                    display: "inline-block",
                    maxWidth: "17rem",
                  }}
                >
                  Meet with our<br></br> Expert Advisors
                </strong>
              </div>
            </div>
            <div style={{ width: "70%" }}>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </small>
            </div>
            <button
              style={{
                padding: ".5rem 1.1rem",
                border: "none",
                backgroundColor: "#1F81DB",
                color: "white",
                width: "8rem",
                borderRadius: "5px",
              }}
            >
              View all
            </button>
          </div>
          <div className="carouselDiv1" style={{ width: "50%" }}>
            <Carousel
              showStatus={false}
              infiniteLoop={true}
              showThumbs={false}
              autoPlay
            >
              <div style={{ display: "flex" }}>
                <div
                  className="imagePosition"
                  style={{ width: "20rem", height: "20rem" }}
                >
                  <img
                    src={"/assets/home/team/member1.svg"}
                    alt="..."
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  className="imagePosition"
                  style={{ width: "20rem", height: "20rem" }}
                >
                  <img
                    src={"/assets/home/team/member2.svg"}
                    alt="..."
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  className="imagePosition"
                  style={{ width: "20rem", height: "20rem" }}
                >
                  <img
                    src={"/assets/home/team/member1.svg"}
                    alt="..."
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  className="imagePosition"
                  style={{ width: "20rem", height: "20rem" }}
                >
                  <img
                    src={"/assets/home/team/member2.svg"}
                    alt="..."
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div id="testimonials" style={{ width: "100%", padding: "4rem 0" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <span
                style={{
                  width: "7rem",
                  height: "2px",
                  backgroundColor: "#EF485C",
                  display: "inline-block",
                }}
              ></span>
              <label style={{ fontSize: "18px", paddingLeft: "0.5rem" }}>
                Testimonials
              </label>
            </div>
            <strong
              style={{
                fontSize: "32px",
                color: "#1F81DB",
                textAlign: "center",
              }}
            >
              Hear From Our Happy Customers
            </strong>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              position: "relative",
            }}
          >
            <div
              className="ques"
              style={{
                zIndex: "10",
                width: "50%",
                position: "absolute",
                bottom: "2.8rem",
                right: "42%",
              }}
            >
              <img
                src="/assets/home/customerQuts/firstquts.svg"
                alt="..."
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              className="imagesQues"
              style={{ width: "50%", padding: "2rem" }}
            >
              <img
                src={"/assets/home/customerQuts/secondImg.svg"}
                alt="..."
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div
          className="totalPadding feedBackMainDiv"
          style={{
            width: "100%",
            display: "flex",
            margin: "4rem 0",
            gap: "1rem",
          }}
        >
          <div
            className="firstDivFeedBackMain"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={"/assets/home/feedbackform/imagefeedback.svg"}
                alt="..."
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            id="contact"
            className="firstDivFeedBackMain"
            style={{ width: "50%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                minWidth: "90%",
              }}
            >
              <div>
                <span
                  style={{
                    width: "7rem",
                    height: "2px",
                    backgroundColor: "#EF485C",
                    display: "inline-block",
                  }}
                ></span>
                <label>Contact Us</label>
              </div>
              <label style={{ color: "#1F81DB", fontSize: "32px" }}>
                Experienced and Trusted
              </label>
              <small style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </small>
              <form
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", width: "100%", gap: "1rem" }}>
                  <div style={{ width: "100%" }}>
                    <input placeholder="Name" className="inputFiledWidth" />
                    <br></br>
                    {/* <small>Enter your Name</small> */}
                  </div>
                  <div style={{ width: "100%" }}>
                    <input placeholder="E mail" className="inputFiledWidth" />
                    <br></br>
                    {/* <small>Enter valid email</small> */}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "100%" }}>
                    <input
                      placeholder="Contact Number"
                      className="inputFiledWidth"
                    />
                    <br></br>
                    {/* <small>Enter your Name</small> */}
                  </div>
                  <div style={{ width: "100%" }}>
                    <input placeholder="Subject" className="inputFiledWidth" />
                    <br></br>
                    {/* <small>Enter valid email</small> */}
                  </div>
                </div>
                <textarea
                  className="inputFiledWidth"
                  placeholder="Your Message"
                  style={{ height: "12rem" }}
                ></textarea>
                <button
                  style={{
                    padding: ".5rem 1.1rem",
                    border: "none",
                    backgroundColor: "#1F81DB",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footerMainDiv"
        style={{
          width: "100%",
          padding: "2rem",
          display: "flex",
          backgroundColor: "#CDE7FF",
          gap: "1rem",
        }}
      >
        <div
          className="footerFirstDiv"
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ width: "45%" }}>
            <img
              src={"/fintaddyLogo.svg"}
              alt="..."
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <small className="footerDis" style={{ width: "66%" }}>
            Our mission is to provide exceptional accounting, tax, and financial
            advisory services that empower our clients to reach their financial
            goals. We strive to build long-lasting relationships based on trust,
            integrity, and professionalism.
          </small>
          <div
            style={{ display: "flex", justifyContent: "start", gap: "1rem" }}
          >
            {socialMediaIcons?.map((item, index) => (
              <div key={index}>
                <img
                  src={item}
                  alt="..."
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="footerScandentDiv"
          style={{ width: "60%", display: "flex" }}
        >
          <div
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <strong>Quicklinks</strong>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <a
                  href="#about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Services
                </a>
              </li>
              <li>Blogs</li>
              <li>
                <a
                  href="#testimonials"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{ width: "60%", display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: "65%", paddingTop: ".5rem" }}>
              <img
                src={"/assets/footer/address.svg"}
                alt="..."
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <small style={{ display: "flex", justifyContent: "center" }}>
          ©2024 fintaddy.com - All rights reserved.
        </small>
      </div>
    </div>
  );
}

export default Home;
