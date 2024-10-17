import React from "react";

function Logo({ width = "50px", height = "50px" }) {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <img
        src="/blog.png"
        alt="logo"
        style={{
          width: width,
          height: height,
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
      <p className="font-semibold text-2xl ">BlogSpot</p>
    </div>
  );
}

export default Logo;
