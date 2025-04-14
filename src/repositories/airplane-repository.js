const CrudRepository = require('./crud-repository');

class AirplaneRepository extends CrudRepository {
    constructor() {
        super();
    }
}

module.exports = AirplaneRepository;
