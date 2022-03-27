const FILENAME = 'captionService.js'
const captionDao = require('../dao/captionDao');

async function getAllCaptions(query){
    console.log('Entering getAllCaptions function of', FILENAME);
    try {
        return await captionDao.fetchAllCaptions(query);
    } catch (error) {
        console.log(error.message);
    }
}

async function getRandomCaption(){
    console.log('Entering getRandomCaption function of', FILENAME);
    try {
        const total = await captionDao.fetchCaptionsCount();
        const randomID = Math.floor(Math.random() * (total) + 1)
        const query = { captionID: randomID };
        // provide filter where captionID matches randomly generated ID number
        return await captionDao.fetchAllCaptions(query);
    } catch (error) {
        console.log(error.message);
    }
}

async function addCaption(req){
    console.log('Entering addCaption function of', FILENAME);
    const query = { text: req.body.text };
    try {
        return await captionDao.insertCaption(query);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllCaptions,
    getRandomCaption,
    addCaption
}