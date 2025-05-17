const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const authController = require('../controllers/authController');
const authMiddleware=require('../middlewares/authMiddleware');
router.post('/signup', [check('username', "Username is required")], authController.register);
router.post('/login', [], authController.login);
router.get('/me', [authMiddleware.protect], authController.getMe);

module.exports=router;