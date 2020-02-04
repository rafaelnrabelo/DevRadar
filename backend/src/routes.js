const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const DeleteController = require('./controllers/DeleteController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs/delete/:id', DeleteController.index);

routes.get('/search', SearchController.index);

module.exports = routes;