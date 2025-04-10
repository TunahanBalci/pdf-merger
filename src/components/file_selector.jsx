import React from "react";

export default function FileSelector({ inputRef, handleClick, handleFilesChange }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      style={{
        cursor: "pointer",
        backgroundColor: "#41729f",
        alignContent: "center",
        color: "white",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <input
        type="file"
        accept=".pdf"
        ref={inputRef}
        onChange={handleFilesChange}
        multiple
        style={{ display: "none" }}
      />
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "5vw",
          userSelect: "none",
        }}
      >
        <svg
          style={{
            display: "inline-block",
            marginRight: "50px",
            transform: "scale(1.25) translateY(10px)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 128 128"
        >
          <path
            fill="#D8D4EA"
            d="M100.2,104H19c-5.5,0-10-4.5-10-10V29h98.7c6,0,10.7,5.3,9.9,11.2l-7.5,55C109.5,100.2,105.2,104,100.2,104z"
          ></path>
          <path
            fill="#FFF"
            d="M104,104H19c-5.5,0-10-4.5-10-10V24h24.6c3.3,0,6.5,1.7,8.3,4.5l4.1,6.1c1.9,2.8,5,4.5,8.3,4.5H89
    c5.5,0,10,4.5,10,10v41v1.9C99,96.5,100.8,100.8,104,104L104,104z"
          ></path>
          <path
            fill="#454B54"
            d="M100.2,107H19c-7.2,0-13-5.8-13-13V24c0-1.7,1.3-3,3-3h24.6c4.4,0,8.4,2.2,10.8,5.8l4.1,6.1
    c1.3,2,3.5,3.1,5.8,3.1H89c7.2,0,13,5.8,13,13v35c0,1.7-1.3,3-3,3s-3-1.3-3-3V49c0-3.9-3.1-7-7-7H54.4c-4.4,0-8.4-2.2-10.8-5.8
    l-4.1-6.1c-1.3-2-3.5-3.1-5.8-3.1H12v67c0,3.9,3.1,7,7,7h81.2c3.5,0,6.5-2.6,6.9-6.1l7.5-55c0.2-2-0.4-4-1.7-5.5
    c-1.3-1.5-3.2-2.4-5.2-2.4c-1.7,0-3-1.3-3-3s1.3-3,3-3c3.7,0,7.3,1.6,9.7,4.4c2.5,2.8,3.6,6.5,3.2,10.2l-7.5,55
    C112.3,102.1,106.7,107,100.2,107z"
          ></path>
          <path
            fill="#454B54"
            d="M107.7,32H43c-1.7,0-3-1.3-3-3s1.3-3,3-3h64.7c1.7,0,3,1.3,3,3S109.3,32,107.7,32z"
          ></path>
        </svg>
        CLICK TO ADD
      </h1>
      <h2
        style={{
          userSelect: "none",
          textAlign: "center",
          marginTop: "50px",
          fontSize: "2vw",
          fontWeight: "lighter",
        }}
      >
        Select PDF files to merge. You can organize them later.
      </h2>
    </div>
  );
}
