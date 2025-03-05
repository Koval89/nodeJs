// console.log('Hello from NodeJs');
//
// require('./services/test')
// const {a, myFunc} = require('./services/test')
// console.log(a);
// myFunc()


///////////////////////////////////////////////////////
// http
//////////////////////////////////////////////////////

// const http = require('node:http')
//
// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'})
//
//     if(req.url === '/cars'){
//         switch (req.method){
//             case 'GET':
//                 return res.end(JSON.stringify({
//                     data:'my cars'
//                 }))
//             case 'POST':
//                 return res.end(JSON.stringify({
//                     data: 'Want to create car'
//                 }))
//         }
//     }
// })
// server.listen(5555)

///////////////////////////////////////////////////////
// path
//////////////////////////////////////////////////////

// const path = require('node:path');
//
// const filePath = path.join(process.cwd(),'services','test.js')
// console.log(filePath);
//
// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));
// console.log(path.parse(filePath));
// console.log(path.normalize('\\\\Users\\\\User\\\\///IdeaProjects\\\\nodeJs\\\\services\''));


///////////////////////////////////////////////////////
// readline
//////////////////////////////////////////////////////