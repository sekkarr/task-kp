import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IdentitasSiswa from "../../components/rekamMedis/formRekamMedis/IdentitasSiswa";
import KeluhanForm from "../../components/rekamMedis/formRekamMedis/Keluhan";
import DiagnosaForm from "../../components/rekamMedis/formRekamMedis/Diagnosa";
import RekamMedisSection from "../../components/rekamMedis/formRekamMedis/RekamMedisSection";
import TindakanSection from "../../components/rekamMedis/formRekamMedis/Tindakan";
import SkorSehat from "../../components/rekamMedis/formRekamMedis/SkorSehat";
import NotificationSection from "../../components/rekamMedis/formRekamMedis/NotificationSection";

const FormRekamMedis = ({ data, onAdd, onEdit }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    tanggal: "",
    petugas: "",
    nama: "",
    nis: "",
    kelas: "",
    keluhan: "",
    tinggi: "",
    berat: "",
    golDar: "",
    diagnosa: "",
    tindakan: "",
    jenisLab: "",
    hasil: "",
    foto: null,
    skorSehat: 1,
    notif1: true,
    notif2: true,
  });

  //form untuk edit
  useEffect(() => {
    if (id) {
      const dataEdit = data.find((item) => item.id === parseInt(id, 10));
      if (dataEdit) setForm(dataEdit);
    }
  }, [id, data]);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  //perubahan skor
  const handleSkorChange = (value) => {
    setForm((prev) => ({
      ...prev,
      skorSehat: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      onEdit(parseInt(id, 10), form);
      alert("Data berhasil diupdate!");
    } else {
      onAdd(form);
      alert("Data berhasil disimpan!");
    }

    navigate("/rekammedis");
  };

  const handleCancel = () => {
    navigate("/rekammedis");
  };

  return (
    <div className="contianer" style={{ padding: "100px" }}>
      <h2>{id ? "Edit Rekam Medis" : "Form Rekam Medis"}</h2>

      <div className="container">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="section-row">
            <div className="section">
              <label>Tanggal</label>
              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
              />
            </div>

            <div className="section">
              <label>Petugas</label>
              <input
                type="text"
                name="petugas"
                value={form.petugas}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="content-grid">
            <div className="left-column">
              <section className="card">
                <IdentitasSiswa form={form} handleChange={handleChange} />
              </section>

              <section className="card">
                <RekamMedisSection form={form} handleChange={handleChange} />
              </section>
            </div>

            <div className="right-column">
              <section className="card">
                <KeluhanForm form={form} handleChange={handleChange} />
              </section>

              <section className="card">
                <DiagnosaForm form={form} handleChange={handleChange} />
              </section>

              <section className="card">
                <TindakanSection form={form} handleChange={handleChange} />
              </section>
            </div>
          </div>

          <section className="card">
            <SkorSehat value={form.skorSehat} onChange={handleSkorChange} />
          </section>

          <section className="card">
            <NotificationSection form={form} handleChange={handleChange} />
          </section>

          <div className="button-group" style={{ marginTop: "20px" }}>
            <button
              type="button"
              onClick={handleCancel}
              style={{ marginLeft: "10px" }}
            >
              Batal
            </button>
            <button type="submit">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRekamMedis;

// - sudah bisa add + edit (cuma yang scoring blmmm berufngsni)
// - 18.9.25: merapikan komponen di FormRekamMedis dan add + edit
