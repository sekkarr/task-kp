import Keluhan from "../../../assets/icons/Recamedic1.svg?react";

const KeluhanForm = ({ form, handleChange }) => {
  return (
    <div className="form-group">
      <h3>
        <Keluhan
          style={{ width: 30, marginRight: 8, verticalAlign: "middle" }}
        />
        Keluhan
      </h3>
      <label>Keluhan</label>
      <textarea name="keluhan" value={form.keluhan} onChange={handleChange} />
    </div>
  );
};

export default KeluhanForm;
