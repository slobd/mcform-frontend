const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        gender: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        phone: { type: String },
        postalCode: { type: String },
        city: { type: String },
        street: { type: String },
        houseNumber: { type: String },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
