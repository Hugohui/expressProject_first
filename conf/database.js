/**
 * 数据库基础信息文件
 */
//mysql配置信息
var mysql = {  
    host: '127.0.0.1',     
    user: 'root',   
    password: 'root',  
    database:'expressDB',
    port: 3306 ,
    connectionLimit:10 
}

exports.mysql = mysql;