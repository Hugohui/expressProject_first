//获取数据库链接
var db = require('../common/basicConnection');
//用户相关sql
var sqlCom = require('../common/sqlCommands'); 

/**
 * 用户登录action
 */

 function loginAction(req,res,next){
     //获取页面传值
    var param = req.body;
    
    db.queryArgs(sqlCom.user_sql.queryName,[param.name],function(err,result){

        var resData = JSON.parse(JSON.stringify(result))[0];
        var result;

        if(resData.pwd == param.pwd){
            result = {
                result:0,
                msg:'登录成功'
            }
        }else{
            result = {
                result:'-1',
                msg:'登录失败'
            }
        }
        db.doReturn(res,result);
    });
 }

/**
 * 添加用户action
 */

 function addUserAction(req,res,next){
     //获取前台也页面的传值
    var param = req.body;

    //执行sql
    db.queryArgs(sqlCom.user_sql.insertOne,[param.name,param.pwd],function(err,result){
        if(!err){
            result = {
                result:0,
                msg:'添加成功'
            }
        }
        db.doReturn(res,result);
    });
 }

/**
 * 获取用户列表
*/

function loadUsersList(req,res,next){
    db.query(sqlCom.user_sql.loadUsersList,function(err,result){
        var result;
        if(err){
            result = {
                result:'-1',
                msg:'获取失败'
            }
        }else{
            result = result;
        }

        db.doReturn(res,result);
    });
}

 module.exports = {
     loginAction:loginAction,
     addUserAction:addUserAction,
     loadUsersList:loadUsersList
 }