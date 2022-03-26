const FILENAME = "pictureDao.js"
const pictureModel = require("../models/pictureModel");


async function fetchAllPictures(query) {
    console.log("Entering fetchAllPictures function of", FILENAME);
    try {
        return await pictureModel.find(query).sort({ pictureID: 1 });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    fetchAllPictures
}