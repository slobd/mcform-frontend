const User = require("../models/User");

const getAllUser = async (req, res) => {
    const users = await User.find(
        req.query.email
            ? {
                email: req.query.email,
            }
            : {}
    ).sort({
        updatedAt: -1,
    });
    return res.status(200).json(users);
};

const getUser = async (req, res) => {
    const user = await User.findOne({ _id: req.query._id });
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
    const user = new User({
        gender: req.body.gender,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        postalCode: req.body.postalCode,
        city: req.body.city,
        street: req.body.street,
        houseNumber: req.body.houseNumber,
    });

    try {
        const dataToSave = await user.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    const user = await User.findOne({ _id: req.body._id });

    user.gender = req.body.gender;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.postalCode = req.body.postalCode;
    user.city = req.body.city;
    user.street = req.body.street;
    user.houseNumber = req.body.houseNumber;

    try {
        await user.save();
        const _user = await User.findOne({ _id: req.body._id });
        res.status(200).json(_user);
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    const response = await User.deleteOne({ _id: req.query._id });
    return res.status(200).json(response);
};

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser };
