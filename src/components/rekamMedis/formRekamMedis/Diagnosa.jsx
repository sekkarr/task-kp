import Diagnosa from "../../../assets/icons/Diagnosa.svg?react";

const DiagnosaForm = ({ form, handleChange }) => {
  return (
    <div className="form-group">
      <h3>
        <Diagnosa
          style={{ width: 30, marginRight: 8, verticalAlign: "middle" }}
        />
        Diagnosa
      </h3>
      <textarea name="diagnosa" value={form.diagnosa} onChange={handleChange} />
    </div>
  );
};

export default DiagnosaForm;
