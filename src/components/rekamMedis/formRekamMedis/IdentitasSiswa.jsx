import Profile from "../../../assets/icons/Profile.svg?react";

const IdentitasSiswa = ({ form, handleChange}) => {
    return (
        <div className="form-group">
            <h3>
                <Profile style={{ width: 30, marginRight:8, verticalAlign: "middle" }} />
                Identitas Siswa
            </h3>
            
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
    )
}

export default IdentitasSiswa