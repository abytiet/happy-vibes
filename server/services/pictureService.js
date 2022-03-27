const FILENAME = 'pictureService.js'
const pictureDao = require('../dao/pictureDao');

async function getAllPictures(query){
    console.log('Entering getAllPictures function of', FILENAME);
    try {
        return await pictureDao.fetchAllPictures(query);
    } catch (error) {
        console.log(error.message);
    }
}

async function getRandomPicture(){
    console.log('Entering getRandomPicture function of', FILENAME);
    try {
        const total = await pictureDao.fetchPicturesCount();
        const randomID = Math.floor(Math.random() * (total) + 1)
        const query = { pictureID: randomID };
        // provide filter where pictureID matches randomly generated ID number
        return await pictureDao.fetchAllPictures(query);
    } catch (error) {
        console.log(error.message);
    }
}

async function addPicture(req){
    console.log('Entering addPicture function of', FILENAME);
    const query = { url: req.body.url };
    try {
        return await pictureDao.insertPicture(query);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllPictures,
    getRandomPicture,
    addPicture
}