const express = require('express');
const { pingController } = require('../controller/ping.controller');
const router = express.Router();

router.get('/', pingController);

module.exports.pingRoutes = router;