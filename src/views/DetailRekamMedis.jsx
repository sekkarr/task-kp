import { useParams } from "react-router-dom";

const DetailRekamMedis = () => {
  const { id } = useParams();

  const dummyData = [
    { id: 1, tanggal: "2025-09-23", petugas: "sekar", nama: "Andi", keluhan: "Demam", diagnosa: "abc", tindakan: "Obat" },
    { id: 2, tanggal: "2025-09-23", nama: "Budi", keluhan: "Batuk", tindakan: "Nebulizer" }
  ];

  const detail = dummyData.find((item) => item.id === Number(id));

  if (!detail) {
    return <p>Data tidak ditemukan</p>;
  }

  return (
    <div style={{ padding: "100px" }}>
      <h2>Riwayat Rekam Medis</h2>
      <p><strong>Tanggal:</strong> {detail.tanggal}</p>
      <p><strong>Nama:</strong> {detail.nama}</p>
      <p><strong>Petugas:</strong> {detail.petugas}</p>
      <p><strong>Keluhan:</strong> {detail.keluhan}</p>
      <p><strong>Diagnosa:</strong> {detail.diagnosa}</p>
      <p><strong>Tindakan:</strong> {detail.tindakan}</p>
    </div>
  );
};

export default DetailRekamMedis;

// notes:
// - belum mulai sicing (coba route aja) - jadi pake dummy dulu