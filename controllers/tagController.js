const { Tag } = require("../db/models");
const { Note } = require("../db/models");

//Create Tag
exports.tagCreate = async (req, res, next) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    next(error);
  }
};

//Fetch Tag
exports.fetchTag = async (tagId, next) => {
  try {
    const tag = await Note.findByPk(tagId);
    return tag;
  } catch (error) {
    next(error);
  }
};

// Tag List

exports.tagList = async (req, res, next) => {
  try {
    const tags = await Tag.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Note,
        attributes: ["name"],
      },
    });
    res.json(tags);
  } catch (error) {
    next(error);
  }
};
