import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { ReactComponent as DetailIcon } from "../assets/icons/detail.svg";
// import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";
// import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";
import { FaRegFileAlt, FaEdit, FaTimes, FaPlus } from "react-icons/fa";



const RekamMedis = () => {
    const data = [
        { id: 1, tanggal: "2025-09-23", petugas: "sekar", nama: "Andi", keluhan: "Demam", diagnosa: "abc", tindakan: "Obat" },
        { id: 2, tanggal: "2025-09-23", petugas: "abc", nama: "Budi", keluhan: "Batuk", diagnosa: "tbc", tindakan: "Rujuk RS" },
        { id: 3, tanggal: "2025-09-23", petugas: "sekar", nama: "Andi", keluhan: "Demam", diagnosa: "abc", tindakan: "Obat" },
        { id: 4, tanggal: "2025-09-23", petugas: "abc", nama: "Budi", keluhan: "Batuk", diagnosa: "tbc", tindakan: "Rujuk RS" },
        { id: 5, tanggal: "2025-09-23", petugas: "sekar", nama: "Andi", keluhan: "Demam", diagnosa: "abc", tindakan: "Obat" },
        { id: 6, tanggal: "2025-09-23", petugas: "abc", nama: "Budi", keluhan: "Batuk", diagnosa: "tbc", tindakan: "Rujuk RS" },
        { id: 7, tanggal: "2025-09-23", petugas: "sekar", nama: "Andi", keluhan: "Demam", diagnosa: "abc", tindakan: "Obat" },
        { id: 8, tanggal: "2025-09-23", petugas: "abc", nama: "Budi", keluhan: "Batuk", diagnosa: "tbc", tindakan: "Rujuk RS" }
        
    ];
    const [dataa, setData] = useState(data);

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;

    //filter
    const [tanggal, setTanggal] = useState(null);
    const [nama, setNama] = useState("");
    const [keluhan, setKeluhan] = useState("");
    const [tindakan, setTindakan] = useState("");

    //list filter
    const uniqueNama = [...new Set(dataa.map((item) => item.nama))];
    const uniqueKeluhan = [...new Set(dataa.map((item) => item.keluhan))];
    const uniqueTindakan = [...new Set(dataa.map((item) => item.tindakan))];

    const filterData = dataa.filter((item) => {
        const matchTanggal = tanggal ? item.tanggal === tanggal.toISOString().split("T")[0] : true;
        const matchNama = nama ? item.nama === nama : true;
        const matchKeluhan = keluhan ? item.keluhan === keluhan : true;
        const matchTindakan = tindakan ? item.tindakan === tindakan : true;

        return matchTanggal && matchNama && matchKeluhan && matchTindakan;
    })

    //reset
    const handleReset = () => {
        setTanggal(null);
        setNama("");
        setKeluhan("");
        setTindakan("");
        setCurrentPage(1);
    };

    //delete
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Yakin mau hapus data ini?");
        if (confirmDelete) {
        setData(dataa.filter((item) => item.id !== id));
        }
    };

    //pagnation
    const totalPages = Math.ceil(dataa.length / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentData = filterData.slice(startIndex, endIndex);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };


    return (
        <div style={{ padding: "100px"}}>
        <h2 style={{ marginTop: "0" }}>Rekam Medis</h2>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
            <Link to="/form">
            <button className="btn-tambah">
                <FaPlus className="btn-icon" />
                Tambah
            </button>
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
            {currentData.length === 0 ? (
                <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                    Belum ada data
                </td>
                </tr>
            ) : (
                currentData.map((item, index) => (
                <tr key={item.id}>
                    <td>{startIndex + index + 1}</td>
                    <td>{item.tanggal}</td>
                    <td>{item.nama}</td>
                    <td>{item.petugas}</td>
                    <td>{item.keluhan}</td>
                    <td>{item.diagnosa}</td>
                    <td>{item.tindakan}</td>
                    <td className="aksi">
                    <Link to={`/detail/${item.id}`} title="Detail">
                        <FaRegFileAlt className="aksi-icon" />
                    </Link>

                    <Link to={`/form/${item.id}`} title="Edit">
                        <FaEdit className="aksi-icon" />
                    </Link>

                    <span title="Delete" onClick={() => handleDelete(item.id)}>
                        <FaTimes className="aksi-icon delete-icon" />
                    </span>
                    </td>
                </tr>
                ))
            )}
            </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
            <button className="btn-prev" onClick={handlePrev} disabled={currentPage === 1}>Sebelumnya</button>
            <span>Halaman {currentPage} dari {totalPages}</span>
            <button className="btn-next" onClick={handleNext} disabled={currentPage === totalPages}>Selanjutnya</button>
        </div>
        </div>
    );
};

export default RekamMedis;


// notes:
// date picker belum fix 
// filter (atas input tanggal)
// tabel 
// styling css
// icon pakai punya react blm sama kaya ui
// - styling tabel belum fix
// - componen belum dipisah - masih jadi satuuu 
// - styling masih berantakan (belum semua dipisah)
// - penamaan belum konsisten (hwhwhwhw)