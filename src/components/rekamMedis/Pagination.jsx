const Pagination = ({ currentPage, totalPages, handlePrev, handleNext }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
      <button onClick={handlePrev} disabled={currentPage === 1}>Sebelumnya</button>
      <span>Halaman {currentPage} dari {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Selanjutnya</button>
    </div>
  );
};

export default Pagination;
