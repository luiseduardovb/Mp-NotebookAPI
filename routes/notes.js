const express = require("express");
const router = express.Router();

const { noteList } = require("../controllers/noteController");

//Note Fetch
router.get("/", noteList);

module.exports = router;
