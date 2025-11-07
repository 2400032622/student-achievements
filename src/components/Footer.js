import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#222",
      color: "#fff",
      textAlign: "center",
      padding: "15px",
      marginTop: "30px"
    }}>
      <p>© {new Date().getFullYear()} Student Achievements Portal | Developed by Bhadri</p>
    </footer>
  );
}
