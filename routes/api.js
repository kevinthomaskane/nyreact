

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

  app.get("/getSaved", function(req, res){
    db.find({}).then(function(response){
      console.log(response)
      res.json(response)
    })
  })
}