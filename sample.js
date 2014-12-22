var express=require("express");
var app= express();
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');
var through = require('through');


app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 3000);
//=======FOR FRONT=========
//=======FOR FORBACK=========

// //Create a bucket and upload something into it
// //var bucketName = 'node-sdk-sample-' + uuid.v4();

//app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('index.html');

    // var numBytes = 0;
    // var address_keyName = 'helloworld.jpg';
    // var stream = fs.createReadStream(address_keyName);


    // stream.on('open',function(data){
    //   stream.pipe(res);
    //   res.render('index.html');
    //   //res.sendStatus(data)
    // })

    // stream.on('error',function(err){
    //   res.end(err);
    // })




    // stream.pipe(through(function(data) {
    //   this.queue(data);
    //   numBytes += data.length;
    //   console.log(numBytes, 'bytes written');
    // })
    // );


    // var bucketName = "langtimeusers"
    // AWS.config.loadFromPath = ('./config.json');
    // var params={Key: address_keyName, 
    //             Body: stream,
    //             Bucket:bucketName
    //           };

    // var s3 = new AWS.S3();
    // s3.putObject(params,function(err,data){
    //   if(err)
    //     console.log(err)
    //   else
    //     console.log("Successfully uploaded data to " + bucketName + "/" + address_keyName);
    // });

});
app.listen(app.get('port'));











//=======FOR S3=========

// var bucketName = "langtimeusers"
// AWS.config.loadFromPath = ('./config.json');
// var params={Key: address_keyName, 
//             Body: stream,
//             Bucket:bucketName
//           };

// var s3 = new AWS.S3();
// s3.putObject(params,function(err,data){
//   if(err)
//     console.log(err)
//   else
//     console.log("Successfully uploaded data to " + bucketName + "/" + address_keyName);
// });



