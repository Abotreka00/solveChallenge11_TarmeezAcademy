import Header from "./component/Header";
import HomePage from "./component/HomePage";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#017575", width: "100%" }}>
        <Header />
      </div>
      <div style={{ marginTop: "20px" }}>
        <HomePage />
      </div>
    </>
  );
}

export default App;
