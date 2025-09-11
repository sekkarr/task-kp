import { BrowserRouter, Route, Routes } from "react-router-dom"; // untuk navigasi antar page
import Digimon from "./views/Digimon";
import Home from "./views/Home";

const App = () => {
  // untuk mapping routes yang bisa diakses
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/digimon" element={<Digimon />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
