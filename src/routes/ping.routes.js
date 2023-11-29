const express = require('express');
const { ping } = require('../service/ping.service');
const router = express.Router();

router.get('/', ping);

module.exports.pingRoutes = router;