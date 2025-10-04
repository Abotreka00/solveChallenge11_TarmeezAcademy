import { useState } from "react";

const MyButton = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      style={{
        minWidth: "150px",
        // height: "100px",
        backgroundColor: isHovered ? "#75017373" : "#750173",
        color: "white",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "5px",
        transition: "0.3s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default MyButton;
