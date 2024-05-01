const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = Schema(
    {
        campaign: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Campaign",
        },
        author: {type: String, required: false},
        path: {type: String, required: false},
        image: {
            src: {type: String, required: true},
            width: {type: Number, required: true},
            height: {type: Number, required: true},
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Gallery", gallerySchema);
