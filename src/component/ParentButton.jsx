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
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
};

export default ParentButton;
