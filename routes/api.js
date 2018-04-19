

module.exports = function (app, db, express) {

  app.post("/save", function (req, res) {
    db.create(
        req.body
      )
      .then(function (update) {
        res.send(update)
      });
  });

  app.get("/getSaved", function(req, res){
    db.find({}).then(function(response){
      res.json(response)
    })
  });

  app.delete("/delete/:id", function(req, res){
    console.log(req.params)
    db.findOneAndRemove({_id: req.params.id}).then(function(response){
      res.json(response)
    })
  })
}