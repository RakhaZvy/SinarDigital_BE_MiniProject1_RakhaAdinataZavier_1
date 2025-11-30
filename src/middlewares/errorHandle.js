const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Ada error/kesalahan pada server.",
    detail: err.message,
  });
};

module.exports = errorHandler;
