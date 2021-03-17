const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 4000;
var fs = require('fs');

var messages = [
    {id:1, message:"Hola"},
    {id:2, message:"mundo"}
]

app.get('/', function (req, res){
    let arr =[]
    for(let k of messages){
        arr.push(k.message)
    }
    var result = arr.toString()
    res.send(result)
})

// const data = {id:3, message:"klk"}

app.post('/messages', async function(req, res){
    var id= req.body;
    var message=  req.body;
    var re= await messages.push(id, message)
    res.send("done")
    console.log(messages)

})

app.put('/messages/:id', function(req,res){
    var id = req.params.id
    
    var Newmessage = req.body.message
   
    messages.map((x)=>{
        if(x.id==id){
            x.message = Newmessage;
        }
        return Newmessage
    })
    console.log("nuevo",Newmessage)
    console.log(id)
    res.send("done")
    console.log(messages)
    
})


app.delete('messages/id', function(req, res){

})


app.listen(PORT, ()=>{
    console.log(`localhost:${PORT}`)
})