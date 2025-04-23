import React from "react";

export const Button = ({ label }) => {
  return (
    <button style={{ padding: "0.5rem 1rem", marginTop: "0.5rem" }}>
      {label}
    </button>
  );
};
