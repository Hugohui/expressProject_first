var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');


//定义路由
router.get('/',function(req,res,next){
    res.render('login');
});

//确定登录
router.post('/oklogin',function(req,res,next){
    userDao.loginAction(req,res,next);
});

module.exports = router;