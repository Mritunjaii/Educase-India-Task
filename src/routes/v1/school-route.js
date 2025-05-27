const express = require('express');
const {schoolController}=require('../../controllers')
const router = express.Router();

router.get('/listSchools', schoolController.listSchools);
router.post('/addSchool', schoolController.addSchool);

module.exports= router;