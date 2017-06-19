var multer = require ('multer');

var db = require('../module/db.moudles.js');
var apiResult = require('../module/ApiResult.js');

//引入的中间件的插件用于数据转化时转换成功
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//上传图片用到的

var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, '../upload')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 

var upload = multer({ storage: storage })

exports.Register = function(app){
	console.log(11)

  //允许设置跨越
  app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By",' 3.2.1')
      // res.header("Content-Type", "application/json;charset=utf-8");
      next();
  });
  
	//添加商品数据的操作
	//上传图片用到的
  //upload.array('photos', 12)  备份
  var cpUpload =  upload.fields([{ name: 'preview', maxCount: 1 }, { name: 'bannerImg', maxCount: 8 }, { name: 'listImg', maxCount: 20 }]);
  app.post('/addData', urlencodedParser,cpUpload, function(request, response) {

    //所有上传图片的集合(类型为obj) 格式{[{},{}]}
    var imgFilesObj = request.files;

    //商品对象
    var newShopObj = JSON.parse(request.body.data);
    console.log(newShopObj);
    //轮播图数组容器
    var bannerImgArr = [];

    //列表图数组容器
    var listImgArr = [];
    //存入图片路径到商品对象中
    for(var attr in imgFilesObj){
      imgFilesObj[attr].forEach(function(item){
        switch(item.fieldname){
          case 'preview' :
          	newShopObj[item.fieldname] = item.filename;
          	break;
          case 'bannerImg' :
        	bannerImgArr.push(item.filename);
        	break;
          case 'listImg' :
        	listImgArr.push(item.filename);
        	break;
        }
      });
    }
    newShopObj.bannerImg = bannerImgArr;
    newShopObj.listImg = listImgArr;

    //写入数据库
    db.save('qqq',newShopObj);   
    //响应
    response.send('{"status":true,"message":"上传成功"}'); 
  });
	

	//查询所有商品
	//result是一个数组，里面存放所有的数据
	app.post('/getProduct',urlencodedParser,function(request, response){
	
		db.exists('qqq',{},[],function(result){
			response.send(result);
		});
 	 });

	//删除指定ID的商品
	app.post('/delProductByid',urlencodedParser,function(request, response){
	    // console.log(request.body);
	    //判断是否删除了商品
	    var isDelete = false;
	    //首先通过id查找数据库
	    db.exists('qqq',{},[],function(result){
	      result.forEach(function(item){
	      
	        //找到，删除商品
	        if(item._id == request.body._id){
	          db.delByProductsObj('qqq',item,function(){
	          });
	          //已经删除商品
	          isDelete = true;
	          return false;
	        }
	      });
	    });
	    //返回删除状态
	    !isDelete ? response.send(JSON.stringify({status:true,message:"删除成功"})):response.send(JSON.stringify({status:false,message:"删除失败"}));
  	});

  	//修改指定ID的商品数据
  	app.post('/changeProductByid',urlencodedParser,function(request,response){
  	
  		var newData = JSON.parse(request.body.newData)
  	
  		db.exists('qqq',{},[],function(result){

  			result.forEach(function(item){

  				if (item._id == request.body._id) {
  					
  					console.log(item)
  					db.changeProduct('qqq',item,newData)
  				}
  			})
  		})
  	})

  	//获取指定ID的商品数据
  	app.post('/gainProductById',urlencodedParser,function(request,response){
  	

  		db.exists('qqq',{},[],function(result){

  			result.forEach(function(item){

  				if (item._id == request.body._id) {
  				
  					db.gainProduct('qqq',item._id,function(result){
  							response.send(result);
  					})
  				}
  			})
  		})
  	})

    //通过关键字查询到数据库的商品
    app.post('/searchProduct',urlencodedParser,function(request,response){
      
      var obj= {}
      var arr = []
      arr.push(request.body.classify)
      arr = arr.toString()
      var Reg = new RegExp(arr)
      obj.name = Reg
      console.log(obj)
      db.exists('qqq',{},[],function(result){

        db.searchProductByclassify('qqq',obj,function(result){
          response.send(result)
        })

      })
    });

    //通过people分类获取专区
     app.post('/gainProductByarea',urlencodedParser,function(request,response){
      
      var obj= {}
      var arr = []
      arr.push(request.body.area)
      arr = arr.toString()
      var Reg = new RegExp(arr)
      obj.people = Reg
      console.log(obj)
      db.exists('qqq',{},[],function(result){
  
        db.searchProductByarea('qqq',obj,function(result){
          response.send(result)
        })

      })
    });
     //查找商品信息，可以限制数量，可以排序
    app.post('/getProductsAdvanced1',urlencodedParser,function(request, response){

      var obj1= {}
      var arr1 = []
      arr1.push(request.body.area)
      arr1 = arr1.toString()
      var Reg1 = new RegExp(arr1)
      obj1.people = Reg1

      console.log('request.body:',request.body);

      console.log('typeof request.body.sort:',typeof request.body.sort);
      var arr = [];
      //根据前端数据添加进数据
      for(var attr in request.body){
        console.log('attr:',attr);
        if(!(attr === 'limit' || attr === 'skip' || attr ==='sort' || attr === "fuzzy")){
          arr.push(request.body[attr]);
        }
      }
      arr = arr.toString();
      if(arr === ""){
        arr = /\d\D/;
      }
      var Reg = new RegExp(arr);
      console.log('arr:',arr,'Reg:',Reg);
      db.getProductFilter('qqq', obj1,request.body, Reg, request.body.skip, request.body.limit, request.body.sort,function(result){
        response.send(JSON.stringify(result));
      });
    });

}