import { Link } from "react-router-dom";

const Menu = ({ items }) => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#ffffffff" }}>
      {items.map((item, index) => (
        <Link key={index} to={item.path} style={{  color: "#333" }}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Menu