const { AppError } = require('../utils/errors/app-error');
const { SchoolRepository } = require('../repositories');
const SchoolRep = new SchoolRepository();
const geolib = require('geolib');
const { StatusCodes } = require('http-status-codes');


async function listSchools(data) {
    try {
        const { latitude, longitude } = data;
        if (!latitude || !longitude) {
            throw new AppError('Latitude and longitude are required', StatusCodes.BAD_REQUEST);
        }
        const response = await SchoolRep.getAll();
        if (response && response.length > 0) {
            const sortedSchools = response
                .map(school => {
                    const distance = geolib.getDistance(
                        { latitude, longitude },
                        { latitude: school.latitude, longitude: school.longitude }
                    );
                    return {
                        id: school.id,
                        name: school.name,
                        address: school.address,
                        latitude: school.latitude,
                        longitude: school.longitude,
                        distance
                    };
                }).sort((a, b) => a.distance - b.distance);
            return sortedSchools;
        } else {
            throw new AppError('No schools found', StatusCodes.NOT_FOUND);
        }
    }
    catch (error) {
        console.log(error);
        throw new AppError('Failed to fetch schools', StatusCodes.INTERNAL_SERVER_ERROR, error);
    }
}


async function addSchool(data) {
    try {
        const school = {
            name: data.name,
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude
        };
        const response = await SchoolRep.create(school);
        if (response) {
            return response;
        } else {
            throw new AppError('Failed to add school', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    } catch (error) {
        console.log(error);
        throw new AppError('Failed to add school', StatusCodes.INTERNAL_SERVER_ERROR, error);
    }
}


module.exports = {
    listSchools,
    addSchool
};