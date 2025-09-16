import { useParams, useNavigate } from "react-router-dom";
import { FaSmile, FaFrown } from "react-icons/fa";

const DetailRekamMedis = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      foto: "",
      nama: "Andi",
      kelas: "10A",
      sekolah: "SMA Negeri 1",
      tinggi: 170,
      berat: 60,
      golDar: "O",
      keluhan: "Demam tinggi, batuk",
      diagnosa: "Flu ringan",
      tindakan: {
        tindakan: "Obat dan istirahat",
        jenisLab: "Darah lengkap",
        hasil: "Normal",
        buktiRontgen: "Tidak ada",
        dokumen: "Resep.pdf",
      },
    },
  ];

  const detail = dummyData.find((item) => item.id === Number(id));
  if (!detail) return <p>Data tidak ditemukan</p>;

  return (
    <div style={{ padding: "100px" }}>
      {/* Profile */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "30px", gap: "20px" }}>
        <img
          src={detail.foto}
          alt="Foto"
          style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <h2 style={{ margin: 0 }}>{detail.nama}</h2>
          <p style={{ margin: 0 }}>{detail.kelas} - {detail.sekolah}</p>
        </div>
      </div>

      <section style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div className="rekam-medis" style={{ flex: 1, border: "1px solid #ccc", padding: "15px"}}>
          <h3>Rekam Medis</h3>
          <p>Tinggi Badan: {detail.tinggi} cm</p>
          <p>Berat Badan:{detail.berat} kg</p>
          <p>Golongan Darah:{detail.golDar}</p>
        </div>

        <div style={{ flex: 1 }}>
          <div className="diagnosa" style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
            <h3>Diagnosa</h3>
            <p>{detail.diagnosa}</p>
          </div>

          <div className="tindakan" style={{ border: "1px solid #ccc", padding: "15px" }}>
            <h3>Tindakan</h3>
            <p>Tindakan: {detail.tindakan.tindakan}</p>
            <p>Jenis Lab: {detail.tindakan.jenisLab}</p>
            <p>Hasil: {detail.tindakan.hasil}</p>
            <p>Bukti Rontgen: {detail.tindakan.buktiRontgen}</p>
            <p>Dokumen: {detail.tindakan.dokumen}</p>
          </div>
        </div>
      </section>

      <section style={{ border: "1px solid #ccc", padding: "15px" }}>
        <h3>Keluhan</h3>
        <p>{detail.keluhan}</p>
      </section>
      
      <div className="button-group" style={{ marginTop: "20px" }}>
        <button
          type="button"
          onClick={() => navigate("/rekammedis")}
          style={{ marginLeft: "10px" }}
        >
          Batal
        </button>
        <button type="submit">Simpan</button>
      </div>
    </div>
  );
};

export default DetailRekamMedis;


//notes:
//masih coba, bleum fix semua
//Q: - apakah ada konten di setiap timeline
//- emoticon diambil dari mana (?)
//- 