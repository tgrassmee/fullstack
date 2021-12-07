import axios from 'axios'


axios.get("https://restcountries.com/v3.1/all")
    .then((x)=>
    {
        x.data.forEach((s:any)=>{
            console.log(s.name.official)
        })

    })
    .catch((error)=>{console.log(error)})

