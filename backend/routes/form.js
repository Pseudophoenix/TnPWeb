const formController=require('../controllers/formController');
const express=require('express');
const authMiddleware=require('../middlewares/authMiddleware');
const formRouter=express.Router();
// formRouter.get('getForm',formController.getForm);
formRouter.post('/form',authMiddleware.authJWT,formController.postForm);
module.exports=formRouter;