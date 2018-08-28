const express = require('express');
const mongoose = require('mongoose');
//连接mongodb数据库,并使用reactDB集合
// const DB_URL = 'mongodb://localhost:27017'
mongoose.connect("mongodb://username:password@localhost:27017/dbname", { useNewUrlParser: true })
mongoose.connection.on('connecter', function() {
    console.log('mongo Database connected success');
})

//类似数据库的表，mongo有文档、字段的概念,定义文档模型
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String,require:true}
    age:{type:Number,require:true}
}))

//create,remove,update分别用来增、删、改
User.create({
    name:'god',
    age:18
},function(err, doc) {
    if (!err) {
        console.log(doc);
    } else {
        console.log(err);
    }
})

const app = express();

// app.get('/data', function(req, res) {
// //查询并返回数据
//     User.find({},function(err, doc) {
//         res.json(doc)
//     })
//     res.json({name:'kami', job:'IT'})
// })

//删除数据
// User.remove({age:18},function(err, doc) {
//     console.log(doc);
// })
app.get('/', function(req, res) {
    res.send('<h1>hello</h1>')
})
app.listen(9093, function() {
    console.log('Node express server run on 9093');
})

//更新数据
// User.update({'user':'god'},{'$set':{age:26}},function(err, doc) {
//     console.log(doc);
// })
