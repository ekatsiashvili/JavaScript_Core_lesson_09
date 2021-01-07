let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, resp) {
    console.log("Start page requested.");
});

server.get("/userGet", function (req, resp) {
    console.log("Form receipted by GET.");
    let obj = req.query;
    console.log(obj.lName += ".ValidatedByGET");
    console.log(obj.fName += ".ValidatedByGET");
    console.log(obj.age += ".ValidatedByGET");
    console.log(obj.address += ".ValidatedByGET");
	resp.send(obj);
});

server.post("/userPost", function (req, resp) {
    console.log("Form receipted by POST.");
    // console.log(JSON.parse(req.query));
    let obj = req.body;
    console.log(obj.lName += ".ValidatedByPOST");
    console.log(obj.fName += ".ValidatedByPOST");
    console.log(obj.age += ".ValidatedByPOST");
    console.log(obj.address += ".ValidatedByPOST");
    resp.send(obj);
});

server.listen(3000); //the server object listens on port 8080