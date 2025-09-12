import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/digimon">Digimon</Link>
      <Link to="/rekammedis">Rekam Medis</Link>
    </nav>
  );
};

export default Menu;
