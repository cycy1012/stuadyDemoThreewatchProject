var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
    app.post('/login', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            DB.get('sexUser', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true));
                    }
                }
            })
        }
    });

    app.post('/register', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        }  else {
            delete request.body.repassword;
            DB.get('sexUser', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(data[0]){console.log('9999用户名已被注册')
                        response.send(ApiResult(false, '用户名已被注册'));
                    } else {
                        console.log(5)
                        DB.insert('sexUser', request.body, function(insertResult){
                            response.send(insertResult);
                        })
                    }
                }
            })
        }        
    })
}