const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mcFormDataSchema = Schema(
    {
        category: {type: String, required: false},
        location: {type: String, required: false},
        property: {type: String, required: false},
        detailedType: {type: String, required: false},
        livingSpaceSize: {type: String, required: false},
        locatedAreaSize: {type: String, required: false},
        roomCount: {type: String, required: false},
        builtYear: {type: String, required: false},
        rentedStatus: {type: String, required: false},
        qualityStandard: {type: String, required: false},
        timeline: {type: String, required: false},
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        reasonForSale: {type: String, required: false},
        netRent: {type: String, required: false},
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("McFormData", mcFormDataSchema);
