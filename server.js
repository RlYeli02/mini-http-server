const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 4000;


var messages = [
    {id:1, message:"Hola"},
    {id:2, message:"mundo"}
]

app.get('/', function (req, res){
    try{
        let arr =[]
        for(let k of messages){
            arr.push(k)
        }
        // var result = arr.toString() para desvolverlo en string
        res.send(arr)

    }catch(err){
        console.log(err)
    }
})

// const data = {id:3, message:"klk"}

app.post('/messages', async function(req, res){
    
    var message=  req.body;
    try{

        await messages.push(message)
        console.log(messages)
        res.status(200).send("message added")
    }
    catch(err){
        res.status(400).send("bad request")
    }
    

})

app.put('/messages/:id', function(req,res){
    var id = req.params.id
    
    var Newmessage = req.body.message
   
    try{
        messages.map((x)=>{
            if(x.id==id){
                x.message = Newmessage;
            }
            return Newmessage
        })
        res.status(200).send("message updated")
    }catch(err){
        res.status(400).send("bad request")
    }
    
})


app.delete('/messages/d/:id', function(req, res){
    var id = req.params.id
    try{

         for( var i = 0; i < messages.length; i++){ 
             console.log(messages[i].id)                   
            if ( messages[i].id == id) { 
                
                messages.splice(i,1); 
                
            }
        }
        res.status(200).send("message deleted")

    }catch(err){
        res.status(400).send("bad request")
    }

})


app.listen(PORT, ()=>{
    console.log(`localhost:${PORT}`)
})