var http = require("http"),
    path = require("path"),
    fs = require('fs'),
    url = require('url');
    // initialize = require("../app/Model/CountriesCollection.js");
    // countryListString = initialize.initializeCountries();
  
    var collection = [{
            'name': 'Ukraine',
            'capital': 'Kiev',
            'population': '42 mln\'s'
        },{
            'name': 'France',
            'capital': 'Paris',
            'population': '66 mln\'s'
        },{
            'name': 'Poland',
            'capital': 'Warsaw',
            'population': '38 mln\'s'
        },{
            'name': 'Germany',
            'capital': 'Berlin',
            'population': '82.4 mln\'s'
        },{
            'name': 'Morocco',
            'capital': 'Rabat',
            'population': '33.8 mln\'s'
        }];

function onRequest (request, response) {
    var requestUrl = request.url,
        fileName = requestUrl.slice(1,requestUrl.length),
        extname = path.extname(requestUrl),
        ext = extname.slice(1,extname.length),
        backExpansion,
        typeText;
  
    if (request.method == 'PUT') {
        var body = '';

        request.on('data', function (data){
            body += data;
        });

        request.on('end', function (){ 
            var json = JSON.parse(body),
                countryList = JSON.parse(collection);
            
            countryList.forEach(function(item, i){
                if (item.id === json.id) {
                    countryList.splice(i,i);
                }      
            });

        countryList.push(json); 
   
        collection = JSON.stringify(countryList);
        });
    }
 
    if(request.method == 'DELETE') {
        var fileName = requestUrl.slice(6,requestUrl.length),
        countryList = JSON.parse(collection);
   
        countryList.forEach(function(item, i){
            console.log(item.id);
            console.log(fileName);

            if(item.id == fileName) {
                console.log('del ' + i);
                countryList.splice(i,i);
            }      
        });

        console.log(fileName);
        console.log(countryList);
        collection = JSON.stringify(countryList);
    }

    if(ext == 'html' ||  ext == 'css' || ext == 'js' /*|| ext == 'png'*/) {
        backExpansion = {
            html: function () {typeText = "text/html"},
            css: function () {typeText = "text/css"},
            js: function () {typeText = "text/js"}
   //png: function () {typeText = "text/png"}
    };
  
    backExpansion[ext]();
   
    function send (code, type, data) {
        response.writeHead(code, {'Content-Type': type});
        response.write(data);
        response.end();
    };
  
 

    fs.readFile(fileName, function (err, data) {
        send(200, typeText, data);
    });
 
    // } else if (fileName == 'Hello') {
    //  send(200, 'text/plain', 'Hello, \n I am SERVER!!!');
    } else if (fileName == 'Ajax') {
        send(200, 'application/json', collection);
    } else {
        fileName = 'index.html';
        fs.readFile(fileName, function (err, data) {
            send(200, "text/html", data);
        });

    }
}

http.createServer(onRequest).listen(3000);

console.log("Server has started.");