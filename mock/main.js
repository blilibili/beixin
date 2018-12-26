var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json({limit: '5mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

app.post('/demo' , (req , res) => {
    console.log(req.body);
})

app.listen(3000)
