const express = require("express");
const router = express.Router();
const {
  tagList,
  fetchTag,
  tagCreate,
} = require("../controllers/tagController");

router.param("tagId", async (req, res, next, tagId) => {
  const tag = await fetchTag(tagId, next);
  if (tag) {
    req.tag = tag;
    next();
  } else {
    const err = new Error("Tag Not Found");
    err.status = 404;
    next(err);
  }
});

//Tag List
router.get("/", tagList);

//Tag Create
router.post("/", tagCreate);

module.exports = router;
