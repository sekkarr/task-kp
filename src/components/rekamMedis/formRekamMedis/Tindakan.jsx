import Tindakan from "../../../assets/icons/Tindakan.svg?react";

const TindakanSection = ({ form, handleChange }) => {
  return (
    <div className="form-group">
      <h3>
        <Tindakan
          style={{ width: 30, marginRight: 8, verticalAlign: "middle" }}
        />
        Tindakan
      </h3>

      <label>Tindakan</label>
      <input
        type="text"
        name="tindakan"
        value={form.tindakan}
        onChange={handleChange}
      />

      <label>Jenis Lab</label>
      <input
        type="text"
        name="jenisLab"
        value={form.jenisLab}
        onChange={handleChange}
      />

      <label>Hasil</label>
      <textarea name="hasil" value={form.hasil} onChange={handleChange} />

      <label>Foto (jpg/png, max 2MB)</label>
      <input
        type="file"
        name="foto"
        accept=".jpg,.png"
        onChange={handleChange}
      />
    </div>
  );
};

export default TindakanSection;
