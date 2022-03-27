const FILENAME = 'captionService.js'
const router = require('express').Router();
const captionService = require('../services/captionService');

router.get('/', async function (req, res) {
    console.log('Entering GET /captions -', FILENAME);
    try {
        const result = await captionService.getAllCaptions();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/random', async function (req, res) {
    console.log('Entering GET /captions/random -', FILENAME);
    try {
        const result = await captionService.getRandomCaption();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/', async function(req, res) {
    console.log('Entering POST /captions -', FILENAME);
    try {
        const result = await captionService.addCaption(req);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;