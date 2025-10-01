import Handle from "rc-slider/lib/Handles/Handle";
import RekamMedis from "../../../assets/icons/Rekamedic2.svg?react";

const RekamMedisSection = ({ form, handleChange }) => {
  return (
    <div className="form-gorup">
      <h3>
        <RekamMedis
          style={{ width: 30, marginRight: 8, verticalAlign: "middle" }}
        />
        Rekam Medis
      </h3>

      <label>Tinggi Badan</label>
      <input
        type="number"
        name="tinggi"
        value={form.tinggi}
        onChange={handleChange}
      />

      <label>Berat Badan</label>
      <input
        type="number"
        name="berat"
        value={form.berat}
        onChange={handleChange}
      />

      <label>Golongan Darah</label>
      <input
        type="text"
        name="golDar"
        value={form.golDar}
        onChange={handleChange}
      />
    </div>
  );
};

export default RekamMedisSection;
