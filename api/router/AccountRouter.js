var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
    app.post('/login', urlencodedParser, function(request, response){
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
        // console.log(request.body)
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
                    if(data[0]){
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
    app.post('/memberCenter',urlencodedParser,function(request,response){
            console.log(requset.body,"===>",response.body)
            DB.get('sexUser',{username:request.body.username}),
                function(result){
                    if(!result.status){
                        response.send(result)
                    }else{
                        var data = result.data;
                        if(data[0]){console.log(4444)
                            // DB.del()
                        }
                    }
                }
    })
    app.post('/address',urlencodedParser,function(request,response){
            console.log(request.body,"========");
            DB.get('watchadd',{xiang:request.body.xiang},function(result){
                if(!result.status){
                    response.send(result);
                }else{
                    var data = result.data;
                    if(data[0]){
                        response.send(ApiResult(false, '收货地址一样了'));
                    }else{
                        DB.insert('watchadd',request.body,function(insertResult){
                            response.send(insertResult)
                        })
                    }
                }
            })
    })
    app.post('/mamage',urlencodedParser,function(request,response){
        DB.get('watchadd',{},function(result){
            response.send(result)
            console.log(result)
        })
    })
    app.post('/delAddress',urlencodedParser,function(request,response){
        console.log(request.body,"响应");
        DB.del('watchadd',{"address":request.body.address},function(result){
                response.send(result)
                console.log(result,"result---->")
        })

    })
}
