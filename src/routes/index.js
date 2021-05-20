const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = Router();

routes.get('/users', UserController.getUsers);
routes.get('/user/:id', UserController.getUserById);
routes.post('/user', UserController.postUser);
routes.put('/user', UserController.putUser);
routes.delete('/user', UserController.deleteUser);

module.exports = routes;