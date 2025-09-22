import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Menu from "./layout/Menu";
import Home from "./views/Home";
import Digimon from "./views/Digimon";
import RekamMedis from "./views/rekamMedis/RekamMedis";
import DetailRekamMedis from "./views/rekamMedis/DetailRekamMedis";
import FormRekamMedis from "./views/rekamMedis/FormRekamMedis";
import rekamMedisDummy from "./data/rekamMedis";

import './App.css'

function App() {
    const [dataa, setDataa] = useState(rekamMedisDummy);

  const handleAdd = (newData) => {
    setDataa([...dataa, { id: Date.now(), ...newData }]);
  };

  const handleEdit = (id, updatedData) => {
    setDataa(dataa.map((item) => (item.id === id ? { ...item, ...updatedData } : item)));
  };
  return (
    <Router>
      <Menu /> 
      <div style={{ padding: "0px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digimon" element={<Digimon />} />
          <Route path="/rekammedis" element={<RekamMedis data = {dataa} setData={setDataa} />} />
          <Route path="/detail/:id" element={<DetailRekamMedis data={dataa} />} />
          <Route path="/form" element={<FormRekamMedis data={dataa} onAdd={handleAdd} onEdit={handleEdit} />} />
          <Route path="/form/:id" element={<FormRekamMedis data={dataa} onAdd={handleAdd} onEdit={handleEdit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
