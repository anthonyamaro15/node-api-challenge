const express = require("express");
const db = require("../data/helpers/actionModel");

const route = express.Router();

//GET /api/actions
route.get("/", (req, res) => {
  db.get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      res.json({ errorMessage: "there was an error getting the actions" });
    });
});

// POST /api/actions
route.post("/", (req, res) => {
  db.insert(req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => {
      res.json({ errorMessage: "there was an error adding the action" });
    });
});

// PUT /api/actions/:id
route.put("/:id", (req, res) => {
  const { id } = req.params;
  db.update(id, req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      res.json({ errorMessage: "there was an error updating the action" });
    });
});

// DELETE /api/actions/:id
route.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id, req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      res.json({ errorMessage: "there was an error deleting the action" });
    });
});

module.exports = route;
