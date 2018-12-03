const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/mainController');

const jwtHelper = require('../config/jwtHelper');


router.post('/kaydol', ctrlMain.kaydet);
router.get('/listele', ctrlMain.listele);
router.post('/authenticate', ctrlMain.authenticate);
router.get('/kullaniciSayfasi',jwtHelper.verifyJwtToken, ctrlMain.kullaniciSayfasi);

module.exports = router;
