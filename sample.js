var express=require("express");
var app= express();
var AWS = require('aws-sdk');
var s3 = new AWS.S3();


//=======FOR FRONT=========

//app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res){
    res.render('index.html');
});
app.listen(app.get('port'));

//=======FOR FORBACK=========

// //Create a bucket and upload something into it
// //var bucketName = 'node-sdk-sample-' + uuid.v4();

var fs = require('fs');
var through = require('through');
var numBytes = 0;
var address_keyName = 'helloworld.jpg';

var stream = fs.createReadStream(address_keyName);
stream.pipe(through(function(data) {
  this.queue(data);
  numBytes += data.length;
  console.log(numBytes, 'bytes written');
}));








var bucketName = "langtimeusers"
AWS.config.loadFromPath = ('./config.json');
var params={Key: address_keyName, 
            Body: stream,
            Bucket:bucketName
          };

var s3 = new AWS.S3();
s3.putObject(params,function(err,data){
  if(err)
    console.log(err)
  else
    console.log("Successfully uploaded data to " + bucketName + "/" + address_keyName);
});



