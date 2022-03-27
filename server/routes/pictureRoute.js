const FILENAME = 'pictureService.js'
const router = require('express').Router();
const pictureService = require('../services/pictureService');

router.get('/', async function (req, res) {
    console.log('Entering GET /pictures -', FILENAME);
    try {
        const result = await pictureService.getAllPictures();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/random', async function (req, res) {
    console.log('Entering GET /pictures/random -', FILENAME);
    try {
        const result = await pictureService.getRandomPicture();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/', async function(req, res) {
    console.log('Entering POST /pictures -', FILENAME);
    try {
        const result = await pictureService.addPicture(req);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;