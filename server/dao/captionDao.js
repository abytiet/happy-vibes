const FILENAME = 'captionDao.js'
const captionModel = require('../models/captionModel');

async function fetchAllCaptions(query) {
    console.log('Entering fetchAllCaptions function of', FILENAME);
    try {
        return await captionModel.find(query).sort({ pictureID: 1 });
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchCaptionsCount(query) {
    console.log('Entering fetchCaptionsCount function of', FILENAME);
    try {
        return await captionModel.count(query);
    } catch (error) {
        console.log(error.message);
    }
}

async function insertCaption(query) {
    console.log('Entering insertCaption function of', FILENAME);
    try {
        const total = await captionModel.count({});
        query['captionID'] = total + 1;
        return await captionModel.create(query);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    fetchAllCaptions,
    fetchCaptionsCount,
    insertCaption
}