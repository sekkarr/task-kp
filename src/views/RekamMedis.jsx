import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RekamMedis = () => {
    const data = [
        { id: 1, tanggal: "2025-09-23", petugas: "sekar", nama: "Andi", keluhan: "Demam", diagnosa: "abc", tindakan: "Obat" },
        { id: 2, tanggal: "2025-09-23", nama: "Budi", keluhan: "Batuk", tindakan: "Rujuk RS" }
        
    ];
    const [dataa, setData] = useState(data);

    const [tanggal, setTanggal] = useState(null);
    const [nama, setNama] = useState("");
    const [keluhan, setKeluhan] = useState("");
    const [tindakan, setTindakan] = useState("");

    const handleReset = () => {
        setTanggal(null);
        setNama("");
        setKeluhan("");
        setTindakan("");
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Yakin mau hapus data ini?");
        if (confirmDelete) {
        setData(dataa.filter((item) => item.id !== id));
        }
    };

    const uniqueNama = [...new Set(dataa.map((item) => item.nama))];
    const uniqueKeluhan = [...new Set(dataa.map((item) => item.keluhan))];
    const uniqueTindakan = [...new Set(dataa.map((item) => item.tindakan))];

    const filterData = dataa.filter((item) => {
        const matchTanggal = tanggal ? item.tanggal === tanggal.toISOString().split("T")[0] : true;
        const matchNama = nama ? item.nama === nama : true;
        const matchKeluhan = keluhan ? item.keluhan === keluhan : true;
        const matchTindakan = tindakan ? item.tindakan === nama : true;

        return matchTanggal && matchNama && matchKeluhan && matchTindakan;
    })

    return (
        <div style={{ padding: "100px"}}>
        <h2 style={{ marginTop: "0" }}>Rekam Medis</h2>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
            <Link to="/form">
            <button className="btn-tambah">Tambah</button>
            </Link>          
        </div>

        <div className="filter-container">
            <DatePicker
            selected={tanggal}
            onChange={(date) => setTanggal(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Input Tanggal"
            showIcon
            />

            <select
            className="select-filter"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            >
            <option value="">Nama Siswa</option>
            {uniqueNama.map((n) => (
                <option key={n} value={n}>
                {n}
                </option>
            ))}
            </select>

            <select
            className="select-filter"
            value={keluhan}
            onChange={(e) => setKeluhan(e.target.value)}
            >
            <option value="">Keluhan</option>
            {uniqueKeluhan.map((k) => (
                <option key={k} value={k}>
                {k}
                </option>
            ))}
            </select>

            <select
            className="select-filter"
            value={tindakan}
            onChange={(e) => setTindakan(e.target.value)}
            >
            <option value="">Tindakan</option>
            {uniqueTindakan.map((t) => (
                <option key={t} value={t}>
                {t}
                </option>
            ))}
            </select>

            <button onClick={handleReset} className="btn-reset">
            Reset
            </button>
        </div>

        <table className="rekam-tabel" border="1" cellPadding="10">
            <thead>
            <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Nama</th>
                <th>Petugas</th>
                <th>Keluhan</th>
                <th>Diagnosa</th>
                <th>Tindakan</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
            {filterData.length === 0 ? (
                <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                    Belum ada data
                </td>
                </tr>
            ) : (
                filterData.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.tanggal}</td>
                    <td>{item.nama}</td>
                    <td>{item.petugas || "-"}</td>
                    <td>{item.keluhan}</td>
                    <td>{item.diagnosa || "-"}</td>
                    <td>{item.tindakan}</td>
                    <td>
                    <Link to={`/detail/${item.id}`}>
                        <button style={{ marginRight: "5px" }}>Detail</button>
                    </Link>
                    <Link to={`/form/${item.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                </tr>
                ))
            )}
            </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
            <button className="btn-prev">Sebelumnya</button>
            <button className="btn-next">Selanjutnya</button>
        </div>
        </div>
    );
};

export default RekamMedis;


// notes:
// date picker belum fix
// filter (atas input tanggal)
// pagenation belum 
// tabel 
// styling css
// aksi (add+edit (?), detail (view only (?),), delete => belum pakai icon