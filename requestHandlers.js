var querystring = require("querystring"),
    fs = require("fs");

function start(response, postData) {
    console.log("Request handler 'start' was called.");
    console.log(process.cwd());

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' +
        'content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name ="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    
        response.writeHead(200, {"Content-type": "text/html"});
        response.write(body);
        response.end();
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("You've sent the text: "+ 
    querystring.parse(postData).text);
    response.end();
}

function show(response){
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-type": "image/png"});
    fs.createReadStream(__dirname + '/tmp/test.png').pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;