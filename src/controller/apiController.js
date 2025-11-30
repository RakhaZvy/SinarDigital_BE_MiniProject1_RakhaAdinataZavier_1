const { loadData, saveData } = require("../utils/helpers");

const getAllDebts = (req, res) => {
  const debts = loadData();
  res.json({
    message: "Daftar Utang",
    total_data: debts.length,
    data: debts,
  });
};

const addDebt = (req, res) => {
  const { nama, nominal, catatan } = req.body;
  const debts = loadData();

  const newId = debts.length > 0 ? debts[debts.length - 1].id + 1 : 1;

  const newDebt = {
    id: newId,
    nama: nama,
    nominal: parseInt(nominal),
    catatan: catatan || "-",
    tanggal: new Date().toISOString().split("T")[0],
  };

  debts.push(newDebt);
  saveData(debts);
  res.status(201).json({
    message: "Hutang berhasil dicatat",
    data: newDebt,
  });
};

module.exports = { getAllDebts, addDebt };
