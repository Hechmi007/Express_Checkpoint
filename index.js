const express=require('express');
const path=require('path')
const app=express();

let time= new Date()
console.log(time.getHours())

if((time.getHours>"9"&&time.getHours<"17"&&time.getDay>="1"&&time.getDay<="5"))
    {
        console.log("notime")
    app.get('*',(req,res)=>{
        res.send("<h1>take some rest</h1>")
    })
    }
    app.use(express.static(path.join(__dirname,'views')));

    
const PORT = 5000;

app.listen(PORT,()=> console.log(`server is running on ${PORT}`))