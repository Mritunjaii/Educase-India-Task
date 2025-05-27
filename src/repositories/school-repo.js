const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const { School } = require("../models");

class SchoolRepository {
    constructor() {
        this.model = School;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            console.log("response from repo", response);
            return response;
        } catch (error) {
            console.log(error);
            throw new AppError(
                "Not able to create the resource",
                StatusCodes.BAD_REQUEST
            );
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log(error);
            throw new AppError(
                "Not able to fetch the resources",
                StatusCodes.BAD_REQUEST
            );
        }
    }
}

module.exports = SchoolRepository;
