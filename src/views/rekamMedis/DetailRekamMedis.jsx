import { useParams, useNavigate } from "react-router-dom";
import { getSkorInfo } from "../../components/rekamMedis/formRekamMedis/SkorSehat";
import RekamMedis from "../../assets/icons/Rekamedic2.svg?react";
import Keluhan from "../../assets/icons/Recamedic1.svg?react";
import Diagnosa from "../../assets/icons/Diagnosa.svg?react";
import Tindakan from "../../assets/icons/Tindakan.svg?react";

const DetailRekamMedis = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = data.find((d) => d.id === parseInt(id, 10));

  if (!item) {
    return <p>Data tidak ditemukan</p>;
  }

  const { icon, label } = getSkorInfo(item.skorSehat);

  return (
    <div className="container" style={{ padding: "100px" }}>
      <h2>Detail Rekam Medis</h2>
      <p>
        <strong>Tanggal:</strong> {item.tanggal}
      </p>

      <div >
        <div className="profile-card">
          <div className="profile-info">
            <strong>{item.nama}</strong>
            <p>{item.kelas}</p>
          </div>

          <div className="skor-box">
            <span className="skor-icon">{icon}</span>
            <p>{label}</p>
          </div>
        </div>

        <div className="content-grid">
          <div className="left-column">
            <section className="card">
              <h3>
                <RekamMedis
                  style={{ width: 30, marginRight: 8, verticalAlign: "middle" }}
                />
                Rekam Medis
              </h3>
              <div className="detail-row">
                <span className="label">Tinggi Badan</span>
                <span className="value">{item.tinggi} cm</span>
              </div>
              <div className="detail-row">
                <span className="label">Berat Badan</span>
                <span className="value">{item.berat} kg</span>
              </div>
              <div className="detail-row">
                <span className="label">Golongan Darah</span>
                <span className="value">{item.golDar}</span>
              </div>
            </section>

            <section className="card">
              <h3>
                <Keluhan
                  style={{ width: 30, marginRight: 8, verticalAlign: "middle" }}
                />
                Keluhan
              </h3>
              <div className="detail-row">
                <span className="label">Keluhan</span>
                <span className="value">{item.keluhan}</span>
              </div>
            </section>
          </div>

          <div className="right-column">
            <section className="card">
              <h3>
                <Diagnosa
                  style={{ width: 30, marginRight: 8, verticalAlign: "middle" }}
                />
                Diagnosa
              </h3>
              <div className="detail-row">
                <span className="label">Diagnosa</span>
                <span className="value">{item.diagnosa}</span>
              </div>
            </section>

            <section className="card">
              <h3>
                <Tindakan
                  style={{ width: 30, marginRight: 8, verticalAlign: "middle" }}
                />
                Tindakan
              </h3>
              <div className="detail-row">
                <span className="label">Tindakan</span>
                <span className="value">{item.tindakan}</span>
              </div>

              <div className="detail-row">
                <span className="label">Jenis Lab</span>
                <span className="value">{item.jenisLab}</span>
              </div>

              <div className="detail-row">
                <span className="label">Hasil</span>
                <span className="value">{item.hasil}</span>
              </div>
            </section>
          </div>
        </div>

        <button
          className="btn-back"
          onClick={() => navigate(-1)}
          style={{ marginTop: "20px" }}
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default DetailRekamMedis;

//notes:
//masih coba, bleum fix semua
//Q: - apakah ada konten di setiap timeline - ini blmmm
//- emoticon diambil dari mana - doneee
