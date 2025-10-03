import { useState } from "react";

const MyButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      style={{
        width: "fit-content",
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
      Click Me
    </button>
  );
};

export default MyButton;
