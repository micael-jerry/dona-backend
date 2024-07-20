const express = require('express');
const { authentication } = require('../middleware/auth/authentication.middleware');
const { getAllReports, getReportById, postReport } = require('../controller/report.controller');
const { validateRequest } = require('../middleware/validator/request.body.validator');
const { reportValidatorSchema } = require('../controller/schema/report.schema');
const router = express.Router();

router.get('/', authentication, getAllReports);
router.post('/', authentication, validateRequest(reportValidatorSchema), postReport);
router.get('/:report_id', authentication, getReportById);

module.exports.reportRouter = router;
