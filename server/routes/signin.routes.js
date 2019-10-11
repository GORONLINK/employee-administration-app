const express = require('express');
const router = express.Router();
const verifyToken = require('../controllers/verify.controller');

const authController = require('../controllers/auth.controller');

router.post('/sign-up', authController.registro);
router.post('/sign-in', authController.iniciarSesion);
router.get('/', verifyToken, authController.ver);

module.exports = router;