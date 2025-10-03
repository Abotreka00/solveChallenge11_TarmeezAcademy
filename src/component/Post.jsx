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
      <span></span>
      <p style={{ textAlign: "center", width: "60%", margin: "auto" }}>
        {para}
      </p>
    </div>
  );
};

export default Post;
