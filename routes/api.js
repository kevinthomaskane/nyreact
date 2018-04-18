

module.exports = function (app, db, express) {

  app.post("/save", function (req, res) {
    console.log(req.body)
    db.create(
        req.body
      )
      .then(function (update) {
        console.log(update)
        res.send(update)
      });
  });
}