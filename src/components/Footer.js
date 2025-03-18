import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0d47a1",
        padding: "15px",
        textAlign: "center",
        color: "white",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Real Estate. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
