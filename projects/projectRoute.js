const express = require("express");
const db = require("../data/helpers/projectModel");

const route = express.Router();

// GET /api/projects
route.get("/", async (req, res) => {
  try {
    const projects = await db.get();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: "there was an error gettting the projects" });
  }
});

// GET /api/projects/:id/actions
route.get("/:id/actions", async (req, res) => {
  try {
    const { id } = req.params;
    const actions = await db.getProjectActions(id);
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({
      errorMessage: "there was an error getting actions for this project",
    });
  }
});

// POST /api/projects
route.post("/", async (req, res) => {
  try {
    const project = await db.insert(req.body);
    res.status(201).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: "there was an error adding a project" });
  }
});

// PUT /api/projects/:id
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await db.update(id, req.body);
    res.status(200).json(project);
  } catch (error) {
    res.json({ errorMessage: "there was an error updating a project" });
  }
});

// DELETE /api/projects/:id
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await db.remove(id);
    res.status(200).json(project);
  } catch (error) {
    res.json({ errorMessage: "there was an error removing a project" });
  }
});

module.exports = route;
