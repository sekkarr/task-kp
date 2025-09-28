export function flattenData(data) {
  const result = [];

  data.forEach((item) => {
    if (item.riwayat?.length) {
      item.riwayat.forEach((r, idx) => {
        result.push({
          id: `${item.id}-${idx + 1}`,
          parentId: item.id,
          nama: item.nama,
          nis: item.nis,
          kelas: item.kelas,
          golDar: item.golDar,
          tanggal: r.tanggal,
          petugas: r.petugas,
          keluhan: r.keluhan,
          diagnosa: r.diagnosa,
          tindakan: r.tindakan,
          jenisLab: r.jenisLab,
          hasil: r.hasil,
          skorSehat: r.skorSehat,
          tinggi: r.tinggi,
          berat: r.berat,
        });
      });
    } else {
      result.push({
        id: item.id.toString(),
        parentId: null,
        nama: item.nama,
        nis: item.nis,
        kelas: item.kelas,
        golDar: item.golDar,
        tanggal: item.tanggal || null,
        petugas: item.petugas || null,
        keluhan: item.keluhan || null,
        diagnosa: item.diagnosa || null,
        tindakan: item.tindakan || null,
        jenisLab: item.jenisLab || null,
        hasil: item.hasil || null,
        skorSehat: item.skorSehat || null,
        tinggi: item.tinggi || null,
        berat: item.berat || null,
      });
    }
  });

  return result;
}