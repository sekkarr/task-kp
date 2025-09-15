import axios from "axios";
import { useState } from "react";
import { Card } from "../components/Card";
import Menu from "../layout/Menu";

const Digimon = () => {
  const [input, setInput] = useState("");
  const [digimon, setDigimon] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!input) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `https://digi-api.com/api/v1/digimon/${input}`
      );
      setDigimon(res.data);
    } catch {
      alert("Data tidak ditemukan");
      setDigimon(null);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "100px" }}>
      <h2>Carii Digimonn</h2>
      <input
        type="text"
        placeholder="Masukkan id atau nama"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginRight: "10px", padding: "12px" }}
      />
      <button onClick={handleSearch} disabled={!input || loading}>
        {loading ? "Loading" : "Cari"}
      </button>
      <div style={{ marginTop: "20 px" }}>
        {!loading && digimon && (
          <>
            <Card data={digimon} layout="vertical" />
            <Card data={digimon} layout="horizontal" />
          </>
        )}
      </div>
    </div>
  );
};

export default Digimon;
