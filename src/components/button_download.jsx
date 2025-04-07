import React from "react";

export default function DownloadFile({ file }) {
  if (!(file instanceof Blob)) {
    return <div style={{ color: "red" }}>❌ Invalid file to download</div>;
  }

  const fileUrl = URL.createObjectURL(file);

  const now = new Date();
  const formatted = now.toISOString().replace(/[:.]/g, "-");
  const fileName = `merged-file-${formatted}.pdf`;

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(fileUrl);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        cursor: "pointer",
        backgroundColor: "white",

        color: "black",
        display: "flex",

        alignItems: "center",
        fontSize: "32px",
        color: "#bfd7ed",
        gap: "20px",

        height: "120px",
        width: "400px",
        borderRadius: "50px",
        marginTop: "10vh",
  
      }}
    >
      <svg
        style={{
          position: "absolute",
          left: "32px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0,0,256,256"
      >
        <g
          fill="#bfd7ed"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(10.66667,10.66667)">
            <path d="M11,3c-3.57422,0 -6.54297,2.41016 -7.5625,5.65625c-2.00781,0.96875 -3.4375,2.97266 -3.4375,5.34375c0,3.30078 2.69922,6 6,6h12c3.30078,0 6,-2.69922 6,-6c0,-3.17969 -2.51953,-5.75 -5.65625,-5.9375c-1.18359,-2.94141 -3.98828,-5.0625 -7.34375,-5.0625zM11,5c2.73438,0 5.01953,1.82422 5.75,4.3125l0.21875,0.75l0.8125,-0.03125c0.21484,-0.01172 0.27734,-0.03125 0.21875,-0.03125c2.22266,0 4,1.77734 4,4c0,2.21875 -1.77734,4 -4,4h-12c-2.22266,0 -4,-1.78125 -4,-4c0,-1.71094 1.0625,-3.14062 2.5625,-3.71875l0.5,-0.1875l0.125,-0.5c0.63672,-2.625 2.98047,-4.59375 5.8125,-4.59375zM10,9v4h-1.75l2.75,3.75l2.75,-3.75h-1.75v-4z"></path>
          </g>
        </g>
      </svg>
      <span style={{
        position: "absolute",
        left: "150px",
      }}>DOWNLOAD</span>
    </div>
  );
}
