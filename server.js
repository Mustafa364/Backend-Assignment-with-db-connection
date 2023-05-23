// Node Js Ky Basic Concepts;

// console.log("Hello World"); // node server.js (for run)

// fs sy Mtlab FileSystem
// const fs = require("fs");

// ===== for Read Directory ==== //

// fs.readdir('./',(err, dir)=>{
//     console.log(dir);
// });


// ==== for Read File ==== //

// fs.readFile('./abc-1','utf-8',(err,file)=>{
//     console.log(file);
// });


// ==== for Write File ==== //

// Jitni Martaba ap ye writeFile Run Karengy Utna ye Apky Code Ko OverWrite Karta JAega;
// fs.writeFile('./abc.txt',"GMG is Here",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("write is Done");
//     }
// });


// ==== for Append File ==== //
// == \n ka mtlab ek tab ka space ya dosri line sy shuru krna
// fs.appendFile('./abc.txt',"\n New Text From GMG",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Append is Done");
//     }
// });

// const http = require("http");
// const server = http.createServer((req, res)=> {
//  console.log("Chal Gya Port Response");
//  res.write("Hello World"); // jab bhi ap res.write likhty hen to usko kill karna bhi zarori hai 
 
// Agar ap usko kill nhii karogy to wo apky server ky sath connected rahegi 
 // Or Agar Connected rahii to wo node.js  hai hamara wo Non-Blocking IO chal raha hota hai
 // Non-Blocking IO ka behavior ye hota hai jab tak koi ek req jis ko node.js process kr raha hota hai
 // wo compelete nhii hogi wo agy nhii barhega
 // To Jab bhi koi ek req pr kam hota hai to usko kill karna zarori hai
 
//  res.end();   // Is sy kia hota res hamra basically request hamari wo kill hojaegi. Ab hamra req or server ky darmian koi connection nhii bana hua

// Lakin ye 4000 ky port ky agy "/" (slash) likh kuxh bhi likhen asdf wagera phr bhi apko hello world show karega
// Agar ap cha rhy hen k 4000 ky agy "/" (slash) laga k kuch likhen abc wagera or port error show kary to usky lie apko if else ki zaroorat paregi.

// Wo Aesa Hoga IF Else k sath
// if(req.url === "/"){
//     console.log("Chal Gya Port Response");    
//     res.write("Hello World");
//     res.end();
// } else{
//     console.log("Nhii Chala Port Response");    
//     res.write("404 not found");
//     res.end();
// }

// });
// server.listen(4000);

// ====--- Ye Sab Node ka tha ab hum express krengy === //
// ye sarii install karii hain
//npm init
// enter krty rhna
// npm i express
// npm start

// const express = require("express");
// const server = express();

// const gmg = require("./routes/gmg")
// server.use((req, res, next) => {
//     req.data = "GMG";
//     next();
//  });

// server.use((req, res, next) => {
//     res.send(req.data);
// })
// server.use("/gmg", gmg);

// const express = require("express");
// require("dotenv").config();
// const server = express();

// const Student = require("./routes/student");
// server.use("/api/student", Student);

// const Teacher = require("./routes/teacher");
// server.use("/api/teacher", Teacher);

// const Institute = require("./routes/institude");
// server.use("/api/institute", Institute);

// server.listen(4000) ;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const StudentRouter = require("./routes/student");
const InstituteRouter = require("./routes/institude")
const CourseRoute = require("./routes/course")
const TeacherRouter = require("./routes/teacher")
require("dotenv").config();
const mongoose = require("mongoose");

// Use body-parser middleware
app.use(bodyParser.json());

app.use("/api/student", StudentRouter);
app.use('/api/instituteRouter', InstituteRouter)
app.use('/api/teacherRouter', TeacherRouter)
app.use('/api/CourseRouter', CourseRoute)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Database Connected Successfully and server is listening on port 4000", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });




// server.listen(4000) ;


// ravose8229@andorem.com
// Abc@123






