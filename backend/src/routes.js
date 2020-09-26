const express = require('express');

const UserController = require('./controllers/UserController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const MatchesController = require('./controllers/MatchesController');
const MessageController = require('./controllers/MessageController');
const AuthController = require('./controllers/AuthController');
const VerificationController = require('./controllers/VerificationController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();



routes.post('/user', UserController.store);
routes.post('/authenticate', AuthController.show);
routes.post('/verification', VerificationController.store);
routes.get('/verification/checkcode', VerificationController.checkCode);
routes.get('/verification/checkicon', VerificationController.checkIcon);

routes.use(authMiddleware); //As rotas abaixo precisam de token de autenticação
routes.get('/authenticate', AuthController.show);
routes.get('/user/profile', UserController.show);
routes.put('/user/edit', UserController.update);
routes.get('/user/list', UserController.index);
routes.get('/user', UserController.index);
routes.get('/message', MessageController.index);
routes.get('/message/:friendId', MessageController.index);
routes.post('/message', MessageController.store);
routes.get('/user/matches', MatchesController.index);
routes.post('/user/:invocadorId/likes', LikeController.store);
routes.post('/user/:invocadorId/dislikes', DislikeController.store);

module.exports = routes; 