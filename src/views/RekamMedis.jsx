import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RekamMedis = () => {
    const data = [];
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

    return (
        <div style={{ padding: "20px"}}>
        <h2>Rekam Medis</h2>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
            <button className="btn-tambah">
            Tambah
            </button>
        </div>

        <div className="filter-container">
            <DatePicker
            selected={tanggal}
            onChange={(date) => setTanggal(date)}
            dateFormat="dd/MM/yyyy HH:mm"
            placeholderText="Input Tanggal"
            showIcon
            />

            <select className= "select-filter" value={nama} onChange={(e) => setNama(e.target.value)} >
                <option value="">Nama Siswa</option>
                <option value="Andi">Andi</option>
                <option value="Budi">Budi</option>
            </select>

            <select className= "select-filter" value={keluhan} onChange={(e) => setKeluhan(e.target.value)} >
                <option value="">Keluhan</option>
                <option value="a">a</option>
                <option value="b">b</option>
            </select>

            <select className= "select-filter" value={tindakan} onChange={(e) => setTindakan(e.target.value)} >
                <option value="">Tindakan</option>
                <option value="a">a</option>
                <option value="b">b</option>
            </select>

            <button onClick={handleReset} className="btn-reset">
            Reset
            </button>
        </div>

        <table
        className="rekam-tabel"
            border="1"
            cellPadding="10"
        >
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
            {data.length === 0 ? (
                <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                    Belum ada data
                </td>
                </tr>
            ) : (
                data.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.tanggal}</td>
                    <td>{item.nama}</td>
                    <td>{item.petugas}</td>
                    <td>{item.keluhan}</td>
                    <td>{item.diagnosa}</td>
                    <td>{item.tindakan}</td>
                    <td>
                    <button style={{ marginRight: "5px" }}>Detail</button>
                    <button>Edit</button>
                    </td>
                </tr>
                ))
            )}
            </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <button className="btn-next" >
            Sebelumnya
            </button>

            <button className="btn-next">
            Selanjutnya
            </button>
        </div>
        </div>
    );
};

export default RekamMedis;
