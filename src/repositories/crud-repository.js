/*
 The CrudRepository servers basic crud functionality.Main purpose of doing this is to maintain a uniform way to handle crud operations.
*/
const { Logger } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error(
                `Something went wrong in crud repo using model : ${this.model} while creating`,
            );
            throw error;
        }
    }
    async destroy(id) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: id,
                },
            });
            return response;
        } catch (error) {
            Logger.error(
                `Something went wrong in crud repo using model : ${this.model} while destroying`,
            );
            throw error;
        }
    }
    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            Logger.error(
                `Something went wrong in crud repo using model : ${this.model} while retrieving using id`,
            );
            throw error;
        }
    }
    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error(
                `Something went wrong in crud repo using model : ${this.model} while retrieving all data`,
            );
            throw error;
        }
    }
    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id,
                },
            });
            return response;
        } catch (error) {
            Logger.error(
                `Something went wrong in crud repo using model : ${this.model} while updating data`,
            );
            throw error;
        }
    }
}

module.exports = CrudRepository;
