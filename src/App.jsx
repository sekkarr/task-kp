import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./layout/Menu";
import Home from "./views/Home";
import Digimon from "./views/Digimon";
import RekamMedis from "./views/RekamMedis";
import DetailRekamMedis from "./views/DetailRekamMedis";
import FormRekamMedis from "./views/FormRekamMedis";
import './App.css'

function App() {
  return (
    <Router>
      <Menu /> 
      <div style={{ padding: "0px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digimon" element={<Digimon />} />
          <Route path="/rekammedis" element={<RekamMedis />} />
          <Route path="/detail/:id" element={<DetailRekamMedis />} />
          <Route path="/form" element={<FormRekamMedis />} />
          <Route path="/form/:id" element={<FormRekamMedis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
