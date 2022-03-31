const http = require('http');

// Q5 a,b,c
// http.createServer((req,res) =>{
//     res.setHeader('Content-Type','text.html');
//     res.write('<h1>Hello World</h1><h3>Jeyaseelan</h3>');
//     res.end();
// }).listen(3000);

// Q5 d

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text.html');
    res.write( '<html><body><form action="/action_page.php" method="post">' +
        ' <label>First name:</label>' +
        '<input type="text" id="fname" name="fname"><br><br>' +
        '<label>Last name:</label>' +
        ' <input type="text" id="lname" name="lname"><br><br>'+
        '<input type="submit" value="Submit">'+
        '</form></body></html>');
    switch(req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {

                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
                break;


    }
    }).listen(3000,(err)=>{
        console.log('Server is listening to port 3000')
    });
