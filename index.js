const express = require("express");
var app = express();

// View EngineにEJSを指定。
app.set('view engine', 'ejs');

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});


// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("index", {});
});