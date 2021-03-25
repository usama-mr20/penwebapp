const router = require("express").Router();
let Pen = require("../models/penModel");

router.route("/").get((req, res) => {
  Pen.find()
    .then((pens) => res.json(pens))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addPen").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newPen = new Pen({
    title,
    description,
  });

  newPen
    .save()
    .then(() => res.json(newPen))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Pen.findById(req.params.id)
    .then((pen) => res.json(pen))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Pen.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pen record deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Pen.findById(req.params.id)
    .then((pen) => {
      pen.title = req.body.title;
      pen.description = req.body.description;

      pen
        .save()
        .then(() => res.json("Pen record updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
