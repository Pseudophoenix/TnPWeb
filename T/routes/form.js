const formController=require('../controllers/formController');
const express=require('express');
const formRouter=express.Router();
formRouter.get('getForm',formController.getForm);
formRouter.post('postForm',formController.postForm);
module.exports=formRouter;