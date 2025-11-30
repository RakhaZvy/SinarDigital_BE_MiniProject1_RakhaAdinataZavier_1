const express = require("express");
const router = express.Router();
const apiRoutes = require("./apiRoutes");

router.get("/", (req, res) => {
  res.send(`
        <h1>Aplikasi Pencatat Utang</h1>
        <p>Selamat datang di sistem penagihan utang teman.</p>
        <p>Gunakan endpoint <b>/api/tambah-utang</b> (POST) untuk mencatat.</p>
        <p>Gunakan endpoint <b>/api/list-utang</b> (GET) untuk melihat daftar.</p>
    `);
});

router.get("/about", (req, res) => {
  res.send(
    "Aplikasi ini dibuat untuk mencata hutang dimana pengguna dapat mencatat siapa saja teman yang meminjam uang, dan belum dikembalikan"
  );
});

router.use("/api", apiRoutes);

module.exports = router;
