const router = require('express').Router();
const pictureService = require('../services/pictureService');

router.get("/", async function (req, res) {
    try {
        const result = await pictureService.getAllPictures();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;