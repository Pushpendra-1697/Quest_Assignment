const { Schema, model } = require("mongoose");

//Schema/blueprint of user
const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        picture: { type: String, required: true }
    },
    { versionKey: false, timestamps: true }
);

//Model of user
const UserModel = model("user", userSchema);

module.exports = UserModel;