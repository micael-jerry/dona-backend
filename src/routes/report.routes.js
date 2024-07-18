const express = require('express');
const { authentication } = require('../middleware/auth/authentication.middleware');
const { getAllReports, getReportById } = require('../controller/report.controller');
const router = express.Router();

router.get('/', authentication, getAllReports);
router.get('/:report_id', authentication, getReportById);

module.exports.reportRouter = router;
