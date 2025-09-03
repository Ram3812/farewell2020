import React from "react";
import logo from "./images/logo.jpg"; // Import logo

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.5rem 1rem",
  background: "#222",
  color: "#fff",
  flexWrap: "wrap"
};

const logoStyle = {
  height: "40px",
  cursor: "pointer"
};

const navLinksStyle = {
  display: "flex",
  gap: "1rem"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem"
};

function App() {
  return (
    <div>
      <nav style={navStyle}>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </a>
        <div style={navLinksStyle}>
          <a href="#about" style={linkStyle}>About Us</a>
          <a href="#contact" style={linkStyle}>Contact Us</a>
        </div>
      </nav>
      <main style={{ padding: "1rem" }}>
        <h1>Hello, React!</h1>
        <p>This is a basic React app template.</p>
      </main>
    </div>
  );
}

export default App;