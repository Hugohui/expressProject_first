/**
 * 连接池以及数据库方法文件
 */
var mysql = require('mysql');
var dbConfig = require('../conf/database');

//使用连接池
var pool = mysql.createPool(dbConfig.mysql);

/**
 * 对query执行的结果自定义返回JSON结果
 */
function responseDoReturn(res, result,resultJSON) {
    if(typeof result === 'undefined') {
        res.json({
            code:'-200',
            msg: 'failed to do'
        });
    } else {
        res.json(result);
    }
};

/**
 * 封装query之sql带不占位符func
 */
function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            //释放链接
            connection.release();
        });
    });
}

/**
 * 封装query之sql带占位符func
 */
function queryArgs(sql,args, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, args,function (err, rows) {
            callback(err, rows);
            //释放链接
            connection.release();
        });
    });
}

//exports
module.exports = {
    query: query,
    queryArgs: queryArgs,
    doReturn: responseDoReturn
}