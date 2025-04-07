import React from "react";

export default function SuccessBanner({ successRef }) {
  return (
    <div
      ref={successRef}
      style={{
        marginTop: "50px",
        padding: "50px",
        width: "100%",
        backgroundColor: "#d4edda",
        border: "1px solid #c3e6cb",
        borderRadius: "10px",
        color: "#155724",
        fontSize: "32px",
        animation: "fadeInOut 3s ease-in-out",
        alignContent: "center",
        textAlign: "center",
        marginBottom: "0px",
        fontWeight: "bold",
        boxSizing: "border-box",
      }}
    >
      Files Merged Successfully!
    </div>
  );
}
