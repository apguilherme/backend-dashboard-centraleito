const { Router } = require('express');

const UserController = require('../controllers/UserController');
const HospitalController = require('../controllers/HospitalController');

const routes = Router();

routes.get('/users', UserController.getItems);
routes.get('/user/:id', UserController.getItemById);
routes.post('/user', UserController.addItem);
routes.put('/user', UserController.updateItem);
routes.delete('/user', UserController.deleteItem);

routes.get('/hospitals', HospitalController.getItems);
routes.get('/hospital/:id', HospitalController.getItemById);
routes.post('/hospital', HospitalController.addItem);
routes.put('/hospital', HospitalController.updateItem);
routes.delete('/hospital', HospitalController.deleteItem);

module.exports = routes;