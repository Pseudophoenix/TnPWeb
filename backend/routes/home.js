const getHome=require('../controllers/homeController');
const express=require('express');
const router=express.Router();
router.get('/',getHome.getHome);
module.exports=router;