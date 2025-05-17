const express=require('express');
const profileRoutes=express.Router();
const profileController=require('../controllers/profileController');
const authMiddleware=require('../middlewares/authMiddleware');
profileRoutes.get('/get-profile-data',authMiddleware.authJWT,profileController.getProfileData);
module.exports=profileRoutes;