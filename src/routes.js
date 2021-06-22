const { Router } = require('express');

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const HospitalController = require('./controllers/HospitalController');
const BedController = require('./controllers/BedController');

const verifyJWT = AuthController.verifyJWT;

const routes = Router();

routes.post('/login', AuthController.login);
routes.get('/verifyToken', AuthController.verifyToken);

routes.get('/users', verifyJWT, UserController.getItems);
routes.get('/user/:id', verifyJWT, UserController.getItemById);
routes.post('/user', UserController.addItem);
routes.put('/user', verifyJWT, UserController.updateItem);
routes.delete('/user', verifyJWT, UserController.deleteItem);

routes.get('/all-hospitals', HospitalController.getAllItems);
routes.get('/hospitals', verifyJWT, HospitalController.getItems);
routes.get('/hospital/:id', verifyJWT, HospitalController.getItemById);
routes.post('/hospital', verifyJWT, HospitalController.addItem);
routes.put('/hospital', verifyJWT, HospitalController.updateItem);
routes.delete('/hospital', verifyJWT, HospitalController.deleteItem);

routes.get('/bed/:id', verifyJWT, BedController.getItemById);
routes.post('/bed', verifyJWT, BedController.addItem);
routes.put('/bed', verifyJWT, BedController.updateItem);
routes.delete('/bed', verifyJWT, BedController.deleteItem);

module.exports = routes;