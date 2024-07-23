import "./Footer.css";

function Footer() {
  const socialMediaIcons = [
    "/assets/footer/fb.svg",
    "/assets/footer/instagram.svg",
    "/assets/footer/linkedin.svg",
    "/assets/footer/x.svg",
  ];
  return (
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
        <div style={{ display: "flex", justifyContent: "start", gap: "1rem" }}>
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
            <li>About us</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Testimonials</li>
            <li>Contact us</li>
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
    </div>
  );
}

export default Footer;
