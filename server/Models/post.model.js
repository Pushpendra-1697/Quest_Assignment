const { Schema, model } = require("mongoose");

//Schema/blueprint of Post
const postSchema = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        userId: { type: Number, required: true }
    },
    { versionKey: false, timestamps: true }
);

//Model of Post
const PostModel = model("post", postSchema);

module.exports = PostModel;