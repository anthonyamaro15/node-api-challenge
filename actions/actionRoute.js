const express = require("express");
const db = require("../data/helpers/actionModel");

const route = express.Router();

//GET /api/actions
route.get("/", async (req, res) => {
  try {
    const actions = await db.get();
    res.status(200).json(actions);
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: "there was an error getting the actions" });
  }
});

// POST /api/actions
route.post("/", async (req, res) => {
  try {
    const action = await db.insert(req.body);
    res.status(201).json(action);
  } catch (error) {
    res.json({ errorMessage: "there was an error adding the action" });
  }
});

// PUT /api/actions/:id
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const action = await db.update(id, req.body);
    res.status(200).json(action);
  } catch (error) {
    res.json({ errorMessage: "there was an error updating the action" });
  }
});

// DELETE /api/actions/:id
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const action = await db.remove(id);
    res.status(200).json(action);
  } catch (error) {
    res.json({ errorMessage: "there was an error deleting the action" });
  }
});

module.exports = route;
