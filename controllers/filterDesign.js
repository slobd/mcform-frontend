const Filter = require("../models/Filter");

const getFilters = async (req, res) => {
    const filters = await Filter.find(
        req.query.author
            ? {
                author: {$in: ["", req.query.author]},
            }
            : {}
    ).sort({
        updatedAt: -1,
    });
    return res.status(200).json(filters);
};

const createFilter = async (req, res) => {
    const filter = new Filter({
        campaign: req.body.campaign_id,
        author: req.body.author,
        image: req.body.image,
        type: req.body.type,
        filter: req.body.filter,
        placeholder: req.body.placeholder,
    });

    try {
        const dataToSave = await filter.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(200).json({message: error.message});
    }
};

const getFilter = async (req, res) => {
    const filter = await Filter.findOne({_id: req.query.id});
    return res.status(200).json(filter);
};

const deleteFilter = async (req, res) => {
    const _filter = await Filter.findOne({_id: req.query.id});
    const response = await Filter.deleteOne({_id: req.query.id});
    return res.status(200).json(response);
};

module.exports = {getFilter, getFilters, createFilter, deleteFilter};
