import axios from 'axios';
import express from 'express';

const app=express();

app.get('/', (req,res) => res.send('Express + TypeScript Server'));

app.listen(4000,()=>console.log('Server started'));


axios.get("https://restcountries.com/v3.1/all")
    .then((x)=>
    {
        x.data.forEach((s:any)=>{
            console.log(s.name.official)
        })

    })
    .catch((error)=>{console.log(error)})

