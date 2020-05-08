const express = require("express");
const db = require("../data/helpers/projectModel");

const route = express.Router();

// GET /api/projects
route.get("/", (req, res) => {
  db.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error gettting the projects" });
    });
});

// GET /api/projects/:id/actions
route.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  db.getProjectActions(id)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      res
        .status(500)
        .json({
          errorMessage: "there was an error getting actions for this project",
        });
    });
});

// POST /api/projects
route.post("/", (req, res) => {
  db.insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error adding a project" });
    });
});

// PUT /api/projects/:id
route.put("/:id", (req, res) => {
  const { id } = req.params;
  db.update(id, req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.json({ errorMessage: "there was an error updating a project" });
    });
});

// DELETE /api/projects/:id
route.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.json({ errorMessage: "there was an error removing a project" });
    });
});

module.exports = route;
