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
            arr.push(k.message)
        }
        var result = arr.toString()
        res.send(result)

    }catch(err){
        console.log(err)
    }
})

// const data = {id:3, message:"klk"}

app.post('/messages', async function(req, res){
    try{

        var id= req.body;
        var message=  req.body;
        var re= await messages.push(message)
        console.log(messages)
        res.send("done")
    }
    catch(err){
        console.log(err)
    }
    

})

app.put('/messages/:id', function(req,res){
    try{
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
    }catch(err){
        console.log(err)
    }
    
})


app.delete('/messages/d/:id', function(req, res){
    try{
        var id = req.params.id

         for( var i = 0; i < messages.length; i++){ 
             console.log(messages[i].id)                   
            if ( messages[i].id == id) { 
                
                messages.splice(i,1); 
                
            }
        }
        res.send("done")
        console.log(messages)

    }catch(err){
        console.log(err)
    }

})


app.listen(PORT, ()=>{
    console.log(`localhost:${PORT}`)
})