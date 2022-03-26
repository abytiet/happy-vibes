const FILENAME = "pictureService.js"
const pictureDao = require("../dao/pictureDao");

async function getAllPictures(query){
    console.log("Entering getAllPictures function of", FILENAME);
    try {
        return await pictureDao.fetchAllPictures(query);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllPictures
}