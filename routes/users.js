var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

//获取用户列表
router.get('/loadUsersList',function(req,res,next){
    userDao.loadUsersList(req,res,next);
});

//添加用户
router.post('/addUser',function(req,res,next){
    userDao.addUserAction(req,res,next);
});

module.exports = router;
