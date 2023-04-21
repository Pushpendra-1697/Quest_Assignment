const { Schema, model } = require("mongoose");

//Schema/blueprint of Post
const postSchema = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        username: { type: String },
    },
    { versionKey: false, timestamps: true }
);

//Model of Post
const PostModel = model("post", postSchema);

module.exports = PostModel;