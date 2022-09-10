const express = require("express");

var app = express();

// express.static ミドルウェア関数
app.use(express.static('static'));
// View EngineにEJSを指定。
app.set('view engine', 'ejs');

const port = 3000;

var server = app.listen(port, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});


// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("top", {});
});