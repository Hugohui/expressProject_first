/**
 * sql语句文件
 */
var user_sql = {
    insertOne:'insert into users (name,pwd) values (?,?)',
    queryName:'select * from users where name = ?',
    loadUsersList:'select * from users'
}

module.exports = {
    user_sql:user_sql
}