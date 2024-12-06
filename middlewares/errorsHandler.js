// sostituisco il messaggio di errore default con un messaggio personalizzato
function errorHandler(err, req, res, next) {
  res.status(500).json({
    error: `${err.status} - ${err.message}`,
    Message: "Stai a canna' da qualche parte! Imbecille!",
  });
}
module.exports = errorHandler;
