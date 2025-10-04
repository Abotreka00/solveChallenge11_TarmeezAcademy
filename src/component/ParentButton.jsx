import { FaStar } from "react-icons/fa";
import MyButton from "./MyButton";

const ParentButton = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyItems: "center",
        gap: "20px",
        border: "3px solid #017575",
        padding: "10px",
      }}
    >
      <MyButton>
        <p>News</p>
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </MyButton>
      <MyButton>
        <p>The Best Reading</p>
        <img
          style={{ width: "100px", height: "100px", borderRadius: "10px" }}
          src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
          alt="dahlia"
        />
      </MyButton>
      <MyButton>
        <p>مقالات مميزه</p>
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <img
          style={{ width: "100px", height: "100px", borderRadius: "10px" }}
          src="https://images.pexels.com/photos/15119483/pexels-photo-15119483.jpeg"
          alt="photo"
        />
      </MyButton>
    </div>
  );
};

export default ParentButton;
