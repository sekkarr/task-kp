import Menu from "../layout/Menu";

const RekamMedis = () => {
  const data = [];

  return (
    <div style={{ padding: "20px"}}>
      <h2>Rekam Medis</h2>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <button 
          style={{
            fontSize: "16px",
            padding: "4px 10px",
            borderRadius: "16px",
            backgroundColor: "#0e7f41ff",
          }}
        >
          Tambah
        </button>
      </div>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
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
    </div>
  );
};

export default RekamMedis;
