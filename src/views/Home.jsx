import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* start of menu */}
      <nav style={{ display: "flex", gap: ".3rem" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/Digimon"}>Digimon</Link>
      </nav>
      {/* end of menu */}
      <h1>Home</h1>
    </div>
  );
};

export default Home;
