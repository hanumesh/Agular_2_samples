var koa = require("koa");
var kserve = require("koa-static");
var liveload = require("livereload");
var kapp = koa();
var lserver = liveload.createServer();
lserver.watch(__dirname + "/app/*.js");
kapp.use(kserve("."));
console.log('started the server');
kapp.listen(6060);