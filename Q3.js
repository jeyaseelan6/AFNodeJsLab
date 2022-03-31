const fs = require('fs');

const fileName = __dirname + './test.txt';

// fs.readFile(fileName,(err,data) =>{
//     if(err){
//         console.log('Error found here');
//         console.error(err);
//
//     }
//     console.log(data.toString());
//     // console.log(data);
// });

const data = fs.readFileSync(fileName);
console.log(data.toString());