const express = require("express");

const filterDesignController = require("../controllers/filterDesign");
const campaignController = require("../controllers/campaign");
const galleryController = require("../controllers/gallery");
const placeholderController = require("../controllers/filterDesignPlaceholder");
const fileController = require("../controllers/file");
const tagController = require("../controllers/tag");
const contactController = require("../controllers/contact");
const uniqueLinkController = require("../controllers/uniqueLink");
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

const {validateAccessToken} = require("../middleware/auth0.middleware.js");

router.get("/filters", filterDesignController.getFilters);
router.get("/filter", filterDesignController.getFilter);
router.delete("/filter", filterDesignController.deleteFilter);
router.post(
    "/filter",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    },
    filterDesignController.createFilter
);


router.get("/campaign", campaignController.getCampaign);
router.delete("/campaign", campaignController.deleteCampaign);
router.get("/campaigns", campaignController.getCampaigns);
router.get("/campaign/confirm-password", campaignController.confirmPassword);
router.get("/campaign/report", campaignController.getReporting);
router.post("/campaign/invite-by-email", campaignController.inviteByEmail);
router.post(
    "/campaign",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    },
    campaignController.createCampaign
);
router.put(
    "/campaign",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    },
    campaignController.editCampaign
);

router.get("/galleries", galleryController.getGalleries);
router.post(
    "/gallery",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    },
    galleryController.createGallery
);
router.delete("/gallery", galleryController.deleteGallery);
router.post("/gallery/send", galleryController.sendGalleryByEmail);

router.get("/placeholders", placeholderController.getPlaceholders);
router.delete("/placeholder", placeholderController.deletePlaceholder);
router.post(
    "/placeholder",
    (req, res, next) => {
        uploadFile.fields([])(req, res, next);
    },
    placeholderController.createPlaceholder
);

router.get("/tags", tagController.getTags);
router.delete("/tag", tagController.deleteTag);
router.post("/tag", tagController.createTag);

router.get("/contact", contactController.getContact);
router.get("/contacts", contactController.getContacts);
router.delete("/contact", contactController.deleteContact);
router.post(
    "/contact",
    uploadFile.fields([{name: "logo"}, {name: "company_logo"}]),
    contactController.createContact
);
router.post("/contact/import", contactController.bulkImportContact);

router.post("/unique-links", uniqueLinkController.createUniqueLinks);
router.get("/unique-links", uniqueLinkController.getUniqueLinks);

router.post("/upload", uploadFile.single("file"), fileController.upload);

module.exports = router;
