

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
    }).catch(function(err){
      console.log(err)
    })
  });

  app.delete("/delete/:id", function(req, res){
    db.findOneAndRemove({_id: req.params.id}).then(function(response){
      res.json(response)
    })
  })
}