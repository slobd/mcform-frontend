const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filterSchema = new mongoose.Schema(
    {
        author: {type: String},
        type: {type: String, enum: ["square", "story", "custom"]},
        thumbnail: {type: String},
        filter: {
            src: { type: String, required: true },
            width: { type: Number, required: true },
            height: { type: Number, required: true },
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
        placeholder: {
            src: { type: String, required: true },
            width: { type: Number, required: true },
            height: { type: Number, required: true },
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("filter", filterSchema);
