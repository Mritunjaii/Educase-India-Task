const {StatusCodes} = require('http-status-codes');
const {SuccessResponse,ErrorResponse} = require('../utils/common');
const {schoolService} = require('../services');
async function listSchools(req, res) {
    try {
        const data ={
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }
        if (!data.latitude || !data.longitude) {
            ErrorResponse.error = "Latitude and longitude are required";
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        const response = await schoolService.listSchools(data);
        if (response) {
            response.forEach(school => {
                school.distance = undefined
            });
            SuccessResponse.data = response;
            return res.status(StatusCodes.OK).json(SuccessResponse);
        } else {
            ErrorResponse.error = "No schools found";
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
        }
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

async function addSchool(req, res) {
    try {
        const data = {
            name: req.body.name,
            address: req.body.address,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        };
        if (!data.name || !data.address) {
            ErrorResponse.error = "Name and address are required";
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if (!data.latitude || !data.longitude) {
            ErrorResponse.error = "Latitude and longitude are required";
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        const response=await schoolService.addSchool(data);
        if (response) {
            SuccessResponse.data = response;
            return res.status(StatusCodes.CREATED).json(SuccessResponse);
        } else {
            ErrorResponse.error = "Failed to add school";
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        }
        
    } 
    catch (error) {
        console.log(error);
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

module.exports = {
    listSchools,
    addSchool
};