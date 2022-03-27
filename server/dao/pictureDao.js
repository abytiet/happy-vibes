const FILENAME = 'pictureDao.js'
const pictureModel = require('../models/pictureModel');

async function fetchAllPictures(query) {
    console.log('Entering fetchAllPictures function of', FILENAME);
    try {
        return await pictureModel.find(query).sort({ pictureID: 1 });
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchPicturesCount(query){
    console.log('Entering fetchPicturesCount function of', FILENAME);
    try {
        return await pictureModel.count(query);
    } catch (error) {
        console.log(error.message);
    }
}

async function insertPicture(query){
    console.log('Entering insertPicture function of', FILENAME);
    try {
        const total = await pictureModel.count({});
        query['pictureID'] = total + 1;
        return await pictureModel.create(query);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    fetchAllPictures,
    fetchPicturesCount,
    insertPicture
}