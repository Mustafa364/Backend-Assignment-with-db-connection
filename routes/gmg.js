const express = require("express");
const route = express.Router();
let b=[
    {
        id:01,
        name:"GMG",
    },
    {
        id:02,
        name:"MNM",
    },
    {
        id:03,
        name:"ABC",
    },
];
// /gmg/ ye jo phele wala /gmg hai ye hamny server.js mn define kia hai wo wala hai
// or jo ye second wala wala / hai ye hamara main url wala hai usky baad akar add hoga
route.get("/",(req, res)=>{
res.send(JSON.stringify(b))
});
route.get("/:id",(req, res)=>{
    let id = req.params.id;
    let i = b.findIndex((x) => x.id == id);
    if(i > -1){
        res.send(a[i].status(200));
    }else{
        res.send("No Data Found").status(404);
    }
});

module.exports = route;