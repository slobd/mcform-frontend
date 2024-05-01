const express = require("express");

const fileController = require("../controllers/file");
const userController = require("../controllers/user");
const mcFormDataController = require("../controllers/mcFormData");

const path = require('path');
const router = express.Router();

const multer = require("multer");
const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});
const uploadFile = multer({
    storage: multerStorage,
});

router.post("/upload", uploadFile.single("file"), fileController.upload);

router.get("/getAllUser", userController.getAllUser);
router.get("/user", userController.getUser);
router.post(
    "/user",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    },
    userController.createUser
);
router.put(
    "/user",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    },
    userController.updateUser
);
router.delete("/user", userController.deleteUser);


router.get("/getAllMcFormData", mcFormDataController.getAllMcFormData);
router.get("/mcFormData", mcFormDataController.getMcFormData);
router.post(
    "/mcFormData",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    },
    mcFormDataController.createMcFormData
);
router.put(
    "/mcFormData",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    }, 
    mcFormDataController.updateMcFormData
);
router.delete("/mcFormData", mcFormDataController.deleteMcFormData);

module.exports = router;
