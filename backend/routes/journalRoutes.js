const express = require("express");

const router = express.Router();

const journalController = require("../controllers/journalController");

router.post("/", journalController.createJournal);
router.get("/insights/:userId", journalController.getInsights);
router.get("/:userId", journalController.getEntries);

module.exports = router;