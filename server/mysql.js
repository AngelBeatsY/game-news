const mysql  = require('mysql');  //调用MySQL模块
//创建一个connection
const connection = mysql.createConnection({    
    host     : '127.0.0.1',       //主机
    user     : 'root',            //MySQL认证用户名
    password:'',
    port:   '3306',
    database: 'test'
});

//创建一个connection
connection.connect(function(err){
    if(err){       
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
}); 

//执行SQL语句
let sql = 'select * from comment';
connection.query(sql, function(err, rows, fields) {
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
    console.log('The solution is: ', rows[0]); 
    // res.json(rows);
}); 

//关闭connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});