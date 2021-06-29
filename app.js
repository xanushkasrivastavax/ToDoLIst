//jshint eversion:6 

const express= require("express");
const bodyParser=require("body-parser");
const Date= require(__dirname+"/date.js");




const app=express();
//const ejs = require('ejs');

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
var items=["Buy Food","Cook Food","Eat Food"];
var workitems=[];
app.get("/", function(req,res){
  let day= Date.getDate(); 
    res.render("list",{listTitle:day, newListItems:items});
});

app.post("/",function(req,res)
{
  let item=req.body.newItem; 
  console.log(req.body.list);
  if(req.body.list=="Work"){
    workitems.push(item);
    res.redirect("/work");
  }
  else{
  items.push(item);
  res.redirect("/");
}

})


app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListItems:workitems});
})



app.listen(3000,function(){
  console.log("Server started at port 3000");
})