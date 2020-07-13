const express = require('express');

const UserController = require('./controllers/UserController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const MatchesController = require('./controllers/MatchesController');
const AuthController = require('./controllers/AuthController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();



routes.post('/user', UserController.store);
routes.post('/authenticate', AuthController.show);

routes.use(authMiddleware); //As rotas abaixo precisam de token de autenticação
routes.get('/user/profile', UserController.show);
routes.get('/user', UserController.index);
routes.get('/user/matches', MatchesController.index);
routes.post('/user/:invocadorId/likes', LikeController.store);
routes.post('/user/:invocadorId/dislikes', DislikeController.store);

module.exports = routes; 