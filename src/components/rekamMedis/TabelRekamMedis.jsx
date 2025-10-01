import { Link } from "react-router-dom";
import Edit from "../../assets/icons/edit.svg?react";
import File from "../../assets/icons/file.svg?react";
import Delete from "../../assets/icons/x.svg?react";

const TabelRekamMedis = ({ data, startIndex, handleDelete, onRowClick }) => {
  return (
    <table className="rekam-tabel" border="1" cellPadding="10">
      <thead>
        <tr>
          <th>No</th>
          <th>Tanggal</th>
          <th>Nama Siswa</th>
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
            <tr
              key={item.id}
              onClick={() => onRowClick && onRowClick(item.tanggal)}
              style={{ cursor: "pointer" }}
            >
              <td>{startIndex + index + 1}</td>
              <td>{item.tanggal}</td>
              <td>{item.nama}</td>
              <td>{item.petugas}</td>
              <td>{item.keluhan}</td>
              <td>{item.diagnosa}</td>
              <td>{item.tindakan}</td>
              <td className="aksi">
                <div className="aksi-wrapper">
                  <Link to={`/detail/${item.id}`} title="Detail">
                    <File className="aksi-icon" />
                  </Link>

                  <Link to={`/form/${item.id}`} title="Edit">
                    <Edit className="aksi-icon" />
                  </Link>

                  <span title="Delete" onClick={() => handleDelete(item.id)}>
                    <Delete className="aksi-icon delete-icon" />
                  </span>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TabelRekamMedis;
