const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        const id = {
            _id: request.params.id
        }
        await Dev.deleteOne(id);
        response.send(`Id: ${id._id} DELETED!!`);
    }
};