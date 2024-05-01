const McFormData = require("../models/McFormData");

const getAllMcFormData = async (req, res) => {
    const data = await McFormData.find({})
    .populate("user");
    return res.status(200).json(data);
};

const getMcFormData = async (req, res) => {
    const data = await McFormData.findOne({ _id: req.query._id })
    .populate("user");
    return res.status(200).json(data);
};

const createMcFormData = async (req, res) => {
    const data = new McFormData({
        category: req.body.category,
        location: req.body.location,
        property: req.body.property,
        detailedType: req.body.detailedType,
        livingSpaceSize: req.body.livingSpaceSize,
        locatedAreaSize: req.body.locatedAreaSize,
        roomCount: req.body.roomCount,
        builtYear: req.body.builtYear,
        rentedStatus: req.body.rentedStatus,
        qualityStandard: req.body.qualityStandard,
        timeline: req.body.timeline,
        user: req.body.user,
        reasonForSale: req.body.reasonForSale,
        netRent: req.body.netRent,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
};

const updateMcFormData = async (req, res) => {
    const data = await McFormData.findOne({ _id: req.body._id });

    data.category = req.body.category;
    data.location = req.body.location;
    data.property = req.body.property;
    data.detailedType = req.body.detailedType;
    data.livingSpaceSize = req.body.livingSpaceSize;
    data.locatedAreaSize = req.body.locatedAreaSize;
    data.roomCount = req.body.roomCount;
    data.builtYear = req.body.builtYear;
    data.rentedStatus = req.body.rentedStatus;
    data.qualityStandard = req.body.qualityStandard;
    data.timeline = req.body.timeline;
    data.user = req.body.user;
    data.reasonForSale = req.body.reasonForSale;
    data.netRent = req.body.netRent;

    try {
        await data.save();
        const _data = await McFormData.findOne({ _id: req.body._id });
        res.status(200).json(_data);
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
};

const deleteMcFormData = async (req, res) => {
    const response = await McFormData.deleteOne({ _id: req.query._id });
    return res.status(200).json(response);
};

module.exports = { getAllMcFormData, getMcFormData, createMcFormData, updateMcFormData, deleteMcFormData };
