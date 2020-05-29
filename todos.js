const express = require("express");
const app = express();

let todos=[];
app.get('/',(req,res)=>{
    res.send(todos)
})

app.get('/add',(req,res)=>{
    if(req.query.task){
        todos.push(req.query.task);
        res.redirect('/')
 }else{
        res.send(`Error:no task define`);
        
    }
})
app.get('/:id',(req,res)=>{
    if(isNaN(parseInt(req.params.id))){
res.send(`Error: id did not match`)
    }else{
        res.send(todos[req.param.id]);
    }
})




















app.listen(3333, () => {
  console.log("server started successfully");
});
