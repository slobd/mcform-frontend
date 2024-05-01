const McFormData = require("../models/McFormData");

const getAllMcFormData = async (req, res) => {
    const _data = await McFormData.find({})
    .populate("user");
    return res.status(200).json(_data);
};

const getMcFormData = async (req, res) => {
    const _data = await McFormData.findOne({ _id: req.query._id })
    .populate("user");
    return res.status(200).json(_data);
};

const createMcFormData = async (req, res) => {
    console.log("req body user", req.body)
    const _data = new McFormData({
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
        const dataToSave = await _data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        console.log("error", error)
        res.status(200).json({ message: error.message });
    }
};

const updateMcFormData = async (req, res) => {
    const _data = await McFormData.findOne({ _id: req.body._id });

    _data.category = req.body.category;
    _data.location = req.body.location;
    _data.property = req.body.property;
    _data.detailedType = req.body.detailedType;
    _data.livingSpaceSize = req.body.livingSpaceSize;
    _data.locatedAreaSize = req.body.locatedAreaSize;
    _data.roomCount = req.body.roomCount;
    _data.builtYear = req.body.builtYear;
    _data.rentedStatus = req.body.rentedStatus;
    _data.qualityStandard = req.body.qualityStandard;
    _data.timeline = req.body.timeline;
    _data.user = req.body.user;
    _data.reasonForSale = req.body.reasonForSale;
    _data.netRent = req.body.netRent;

    try {
        await _data.save();
        const data = await McFormData.findOne({ _id: req.body._id });
        res.status(200).json(data);
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
};

const deleteMcFormData = async (req, res) => {
    const response = await McFormData.deleteOne({ _id: req.query._id });
    return res.status(200).json(response);
};

module.exports = { getAllMcFormData, getMcFormData, createMcFormData, updateMcFormData, deleteMcFormData };
