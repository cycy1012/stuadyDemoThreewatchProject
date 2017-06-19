var mongodb = require('mongodb');

var server = new mongodb.Server('127.0.0.1', 27017);

var db = new mongodb.Db('shuju', server);

db.open(function(err,db){
    if(err)throw err;
    console.info('mongodb connected');
});

//把数据写入数据库中
//_collections是数据库中数据表的名字
var save = function(_collection, data){

		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				collection.insert(data);
			}
			
		})

};

//查询数据库中的所有数据
var exists = function(_collection, data, arr, callback){

		var obj = {};
		// arr.forEach(function (ele) {
		// 	//obj = data
		// 	obj[ele] = data[ele]? data[ele] : '';
  //       });

        db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)
            } else {
                collection.find(obj).toArray(function(err, docs){
                	//docs就是所有的数据,并且是一个数组,obj = {}.
                    callback(docs);
                });
            }
        });

};

//删除指定ID的商品数据
 //删除直接通过商品完整信息
var delByProductsObj = function(_collection,data,callback){
		
	db.collection(_collection,function(err,collection){
		collection.remove(data,function(err,result){
			// console.log(result);
		})

	});	
}

//修改指定ID的商品数据

var changeProduct = function(_collection,item,newData){
		
		db.collection(_collection,function(err,collection){
			collection.update(item,{$set:newData},function(err,result){
				if(err){
					console.log(err);
				}
			})

		});	
};


//查询数据库中的所有数据
var gainProduct = function(_collection,id,callback){

        db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)
            } else {
                collection.find(id).toArray(function(err, docs){
                	//docs就是所有的数据,并且是一个数组,obj = {}.
                    callback(docs);
                });
            }
        });

};

//通过关键字搜索商品的数据
var searchProductByclassify=function(_collection,obj,callback){
	console.log(obj)
	db.collection(_collection,function(error,collection){

		if (error) {
			console.log(error)
		}else{
			collection.find(obj).toArray(function(err,docs){
				callback(docs);
			})
		}
	})
}
//通过专区获取数据
var searchProductByarea=function(_collection,obj,callback){
	console.log(obj)
	db.collection(_collection,function(error,collection){

		if (error) {
			console.log(error)
		}else{
			collection.find(obj).toArray(function(err,docs){
				callback(docs);
			})
		}
	})
}

//查询根据条件商品，可以排序 ，可以限制数量，用于分页查询
var getProductFilter = function(_collection,obj1, data, Reg,skip,limit, sort,callback){
    //初始化变量的值   
    /*
        skip：查找起始位置
        limit：得到结果的个数
        sort：根据给定条件排序 1升序-1降序 (前台必须JSON.strigify否则parse出错,则取消排序
        格式："sotr":JSON.strigify({price:1}))
    */ 
    skip = skip ? parseInt(skip) : 0;
    limit = limit ? parseInt(limit) : 0;
    try{
        sort = sort ? JSON.parse(sort) : {};
    }catch(error){
        console.log('sort转换失败,取消排序,错误信息：',error);
        sort = {};
    }

    //obj为需要查找的数据
    var obj = {};
    for(var attr in data){
        //假如满足一下条件则跳过不加入obj中
        if(!(attr === 'limit' || attr === 'skip' || attr ==='sort' || attr === "fuzzy")){
            obj[attr] = Reg;
        }
    }
    db.collection(_collection, function(error, collection){
        if(error){
            console.log(error)
        } else {
            console.log('obj:',obj);
            console.log('objobjobj',obj,skip,limit,sort)
            collection.find(obj1).skip(skip).limit(limit).sort(sort).toArray(function(err, docs){
                callback(docs);
            });   
        }
    });

};

exports.save = save;
exports.exists = exists;
exports.delByProductsObj = delByProductsObj;
exports.changeProduct = changeProduct;
exports.gainProduct = gainProduct;
exports.searchProductByclassify = searchProductByclassify;
exports.searchProductByarea = searchProductByarea;
exports.getProductFilter = getProductFilter;