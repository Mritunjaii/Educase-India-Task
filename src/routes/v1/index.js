const express = require('express');

const SchoolRouter = require("./school-route");
const router = express.Router();

router.use('/school', SchoolRouter);


module.exports = router;
