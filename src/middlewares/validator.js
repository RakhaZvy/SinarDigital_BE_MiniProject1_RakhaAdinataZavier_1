const validateInput = (req, res, next) => {
  const { nama, nominal } = req.body;
  if (!nama || !nominal) {
    return res.status(400).json({
      status: "error",
      message: "Nama yang minjem, dan nominalnya harus diisi!",
    });
  }
  next();
};

module.exports = { validateInput };
