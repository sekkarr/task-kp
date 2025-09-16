import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormRekamMedis = () => {
    const navigate = useNavigate();

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
        notif1: false,
        notif2: false,
    });

    const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setForm({
        ...form,
        [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", form);
        alert("Data berhasil disimpan!");
        navigate("/rekammedis"); 
    };

    const handleCancel = () => {
        navigate("/rekammedis"); 
    };

    return (
        <div style={{ padding: "100px" }}>
        <h2>Form Rekam Medis</h2>
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

            <div className="section-row">
            <div className="section">
                <h3>Identitas Siswa</h3>
                <label>Nama Siswa</label>
                <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                />

                <label>NIS</label>
                <input
                type="text"
                name="nis"
                value={form.nis}
                onChange={handleChange}
                />

                <label>Kelas</label>
                <input
                type="text"
                name="kelas"
                value={form.kelas}
                onChange={handleChange}
                />
            </div>

            <div className="section">
                <h3>Keluhan</h3>
                <label>Keluhan</label>
                <textarea
                name="keluhan"
                value={form.keluhan}
                onChange={handleChange}
                />
            </div>
            </div>

            <div className="section-row">
            <div className="section">
                <h3>Rekam Medis</h3>
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

            <div className="section">
                <h3>Diagnosa</h3>
                <textarea
                name="diagnosa"
                value={form.diagnosa}
                onChange={handleChange}
                />
            </div>
            </div>

            <div className="section-row">
                <div className="section"></div>
                <div className="section">
                    <h3>Tindakan</h3>
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
                    <textarea
                        name="hasil"
                        value={form.hasil}
                        onChange={handleChange}
                    />

                    <label>Foto (jpg/png, max 2MB)</label>
                    <input
                        type="file"
                        name="foto"
                        accept=".jpg,.png"
                        onChange={handleChange}
                    />
                </div>

            </div>


            <div className="section" style={{ marginTop: "20px" }}>
                <h3>Notifikasi</h3>
                <label>Beritahu Orang Tua                                    
                <input
                type="checkbox"
                name="notif1"
                checked={form.notif1}
                onChange={handleChange}
                style={{  marginLeft: "40px" }}
                />
                </label>

                <label>Notifikasi Orang Tua                                    
                <input
                type="checkbox"
                name="notif2"
                checked={form.notif2}
                onChange={handleChange}
                style={{  marginLeft: "33px" }}
                />
                </label>

            </div>

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
    );
};

export default FormRekamMedis;


// notes:
// - masih kurang icon icon
// - kurang styling juga - yang di foto masih biasa 
// - display inputan
// - belum otomatis untuk form edit - masih sama dengan form tambah  (karena data masih dummy)
// - 

