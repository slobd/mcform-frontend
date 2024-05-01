require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

console.log('MongoDB URI:', process.env.MONGODB_URI);
mongoose.connect(`${process.env.MONGODB_URI}`);
const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});
database.once("connected", async () => {
    console.log("Database Connected");
});

global.appRootRir = __dirname;
const app = express();
app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(express.json());

const router = require("./routes");

app.use("/", router);

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`);
});
