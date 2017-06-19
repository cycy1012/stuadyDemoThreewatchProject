//http://visionmedia.github.io/superagent/
import request from 'superagent'

const LOCAL_SERVER = 'http://10.3.133.50:8888/';

const DEV_SERVER = '';
const PRO_SERVER = '';

function getUrl(path) {
    if (path.startsWith('http')) {
        return path;
    }
    return `${LOCAL_SERVER}${path}`;
}

const HttpClient = {
    get: (path, query) => new Promise((resolve, reject) => {
        var req = request
            .get(getUrl(path))
            .query(query)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
    }),
// funtion(path,query){
//     new Promise(function(resolve,reject){
//         var req =request.get(getUrl(path))
//         var req =query(query)
//         var req =requset.end(function(err,res){
//              if (err) {
//                     reject(err);
//                 } else {
//                     resolve(res.body);
//                 }
//         })
//     })
// }

    post: (path, formdata, query) => new Promise((resolve, reject) => {
        request
            .post(getUrl(path))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .query(query)
            .send(formdata)
            .end((err, res) => {
                if (err) {
                    reject(err);
                    console.log("错误了")
                } else {
                    resolve(res.body);
                }
            });
    })
};

export default HttpClient;
