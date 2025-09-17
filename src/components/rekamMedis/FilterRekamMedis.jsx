import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterRekamMedis = ({
  tanggal, setTanggal, nama, setNama, keluhan, setKeluhan, tindakan, setTindakan, uniqueNama, uniqueKeluhan, uniqueTindakan, handleReset,
}) => {
  return (
                <div className="filter-container">
                <DatePicker
                selected={tanggal}
                onChange={(date) => setTanggal(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Input Tanggal"
                showIcon
                className="select-filter"
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
  )
}

export default FilterRekamMedis