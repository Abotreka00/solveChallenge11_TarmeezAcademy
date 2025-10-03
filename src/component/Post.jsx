import React from "react";

const Post = ({ title, para }) => {
  return (
    <div
      style={{
        border: "3px solid #017575",
        padding: "10px 0",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <span
        style={{
          display: "block",
          width: "90%",
          height: "3px",
          margin: "0 auto 20px auto",
          backgroundColor: "#017575",
        }}
      ></span>
      <p style={{ textAlign: "center", width: "60%", margin: "auto" }}>
        {para}
      </p>
    </div>
  );
};

export default Post;
