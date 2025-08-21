const mongoose = require("mongoose");
const ArticleSchema = new mongoose.Schema({
    title:{type: String, required: true},
    link:{type: String, required: true},
    summary:{type: String, required: true},
    imageUrl:{type: String, required: true},
    tags:[String],
    createdAt: {type:Date, default: Date.now},
});

module.exports = mongoose.model("Article", ArticleSchema);  