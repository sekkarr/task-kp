import { useState } from "react";
import { Link } from "react-router-dom";
import  Plus from "../../assets/icons/Plus.svg?react";
import Pagination from "../../components/rekamMedis/Pagination";
import TabelRekamMedis from "../../components/rekamMedis/TabelRekamMedis";
import FilterRekamMedis from "../../components/rekamMedis/FilterRekamMedis";


const RekamMedis = ({data, setData}  ) => {

    //delete
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Yakin mau hapus data ini?");
        if (confirmDelete) {
        setData(data.filter((item) => item.id !== id));
        }
    };

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;

    //filter
    const [tanggal, setTanggal] = useState([null, null]);
    const [nama, setNama] = useState("");
    const [keluhan, setKeluhan] = useState("");
    const [tindakan, setTindakan] = useState("");

    // filter dropdown
    const uniqueNama = [...new Set(data.map((item) => item.nama))];
    const uniqueKeluhan = [...new Set(data.map((item) => item.keluhan))];
    const uniqueTindakan = [...new Set(data.map((item) => item.tindakan))];

    const filterData = data.filter((item) => {
        let matchTanggal = true;
            if (tanggal[0] && tanggal[1]) {
      const itemDate = new Date(item.tanggal);
      matchTanggal = itemDate >= tanggal[0] && itemDate <= tanggal[1];
    } const matchNama = nama ? item.nama === nama : true;
        const matchKeluhan = keluhan ? item.keluhan === keluhan : true;
        const matchTindakan = tindakan ? item.tindakan === tindakan : true;

        return matchTanggal && matchNama && matchKeluhan && matchTindakan;
    })

    //reset
    const handleReset = () => {
        setTanggal([null, null]);
        setNama("");
        setKeluhan("");
        setTindakan("");
        setCurrentPage(1);
    };

    //pagnation
    const totalPages = Math.ceil(filterData.length / perPage);
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

            <div className="container">
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
                <Link to="/form">
                <button className="btn-tambah">
                    <Plus className="btn-icon" />
                    Tambah
                </button>
                </Link>        
                </div>

                <FilterRekamMedis
                    tanggal={tanggal}
                    setTanggal={setTanggal}
                    nama={nama}
                    setNama={setNama}
                    keluhan={keluhan}
                    setKeluhan={setKeluhan}
                    tindakan={tindakan}
                    setTindakan={setTindakan}
                    uniqueNama={uniqueNama}
                    uniqueKeluhan={uniqueKeluhan}
                    uniqueTindakan={uniqueTindakan}
                    handleReset={handleReset}
                />

                <TabelRekamMedis 
                    data={currentData} 
                    startIndex={startIndex} 
                    handleDelete={handleDelete}
                />
                
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    handlePrev={handlePrev} 
                    handleNext={handleNext}
                />
            </div>
        </div>
    );
};

export default RekamMedis;


// notes:
// date picker belum fix - harusnya setdatefrom dulu ga si (?)
// filter (atas input tanggal)
// tabel 
// styling css
// icon pakai punya react blm sama kaya ui - udah coba export dari figma
// - styling tabel belum fix
// - componen belum dipisah - masih jadi satuuu - udah dipisah
// - styling masih berantakan (belum semua dipisah)
// - penamaan belum konsisten (hwhwhwhw)
