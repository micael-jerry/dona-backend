const express = require('express');
const { helloWorldController } = require('../controller/hello.controller');
const router = express.Router();

router.get('/', helloWorldController);

module.exports.helloWorldRouter = router;
