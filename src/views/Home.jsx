import Menu from "../layout/Menu";
import menuItems from "../layout/menuItems";

const Home = () => {

  return (
    <div style={{ padding: "20px" }}>
      <Menu items={menuItems} />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
