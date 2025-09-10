import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import axios from 'axios';

const App = () => {
  const [digimon, setDigimon] = useState(null);

  useEffect(() => {
    axios.get("https://digi-api.com/api/v1/digimon/1")
    .then((res) => {
      setDigimon(res.data)
    })
  }, []);

  if (!digimon) return <p>Loading...</p>;

  return (
    <div>
      <Card data={digimon} layout="vertical" />
      <Card data={digimon} layout="horizontal" />
    </div>
  );
};

export default App;   
