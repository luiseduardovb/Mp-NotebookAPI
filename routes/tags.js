const express = require("express");
const router = express.Router();
const { tagList, tagCreate } = require("../controllers/tagController");

//Tag List
router.get("/tags", tagList);

//Tag Create
router.post("/tags", tagCreate);
