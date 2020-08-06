const { Tag } = require("../db/models");
const { Note } = require("../db/models");

// exports.fetchTag = async (tagId, next) => {
//   try {
//     const tag = await Tag.findByPk(tagId);
//     return tag;
//   } catch (error) {
//     next(error);
//   }
// };

// exports.tagList = async (req, res, next) => {
//   try {
//     const tags = await Tag.findAll({
//       include: {
//         model: Note,
//         as: "note",
//         attributes: ["name", "id"],
//       },
//     });
//     res.json(tags);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.tagCreate = async (req, res, next) => {
//   try {
//     const newTag = await defaultTags.push(req.body);
//     res.status(201).json(newTag);
//   } catch (error) {
//     next(error);
//   }
// };

//Create Tag
exports.tagCreate = async(req, res) => {
    const savedTag = await Tag.create( req.body, {w:1}, {returning: true});

    req.body.notes.forEach(item) => {

        const note = await Note.findByPk(item.id);
        if(!note) {
            return res.status(400)
        }

        const noteTag = {
            tagId: savedTag.id
            noteId: item.id
        }

        const savedNoteTag = await TagName.create(noteTag, {w:1}, {returning: true});
    }

}

// Tag List

exports.tagList = async(req,res) => {
    
    const allTags = await Tag.findAll({
        include:[{
            model:Note,
            as:"notes",
            required: false,
            attributes:["id", "name"],
            through: {
                model: TagName,
                as: "tagNames",
                attributes: ["id"],
            }
        }]
    })
}
