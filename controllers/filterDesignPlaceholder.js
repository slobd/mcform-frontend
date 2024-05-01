const Placeholder = require("../models/Placeholder");

const getPlaceholders = async (req, res) => {
    const placeholders = await Placeholder.find({
        author: req.query.author,
    });
    return res.status(200).json(placeholders);
};

const createPlaceholder = async (req, res) => {
    const placeholder = new Placeholder({
        image: req.body.image,
        author: req.body.author,
        type: req.body.type,
        width: req.body.width,
        height: req.body.height,
    });

    try {
        const dataToSave = await placeholder.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(200).json({message: error.message});
    }
};

const deletePlaceholder = async (req, res) => {
    const response = await Placeholder.deleteOne({
        _id: req.query.id,
    });
    return res.status(200).json(response);
};

module.exports = {getPlaceholders, deletePlaceholder, createPlaceholder};
