import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav style={{ 
      display: "flex", 
      gap: "1rem", 
      padding: "1rem", 
      backgroundColor: "#ffffffff",
      margin: "12px",
      
    }}>
      <Link to="/">Home</Link>
      <Link to="/digimon">Digimon</Link>
      <Link to="/rekammedis">Rekam Medis</Link>
    </nav>
  );
};

export default Menu;
