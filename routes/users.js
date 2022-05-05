const express=require("express");
const router=express.Router();
const usercontroller=require("../controllers/users_controller");

router.get('/',usercontroller.usercontroller);

module.exports=router;