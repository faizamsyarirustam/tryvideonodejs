const express = require('express');
const cors=require("cors")
const app = express();
const port = 82;

app.use(cors());
app.use(express.json());

app.get("/sensor1", (req,res)=>{
    res.send({sensor:[{tanggal:"2023-01-11 1:20", suhu:"200"},{tanggal:"2023-01-12 2:20", suhu:"400"},{tanggal:"2023-01-18 4:20", suhu:"500"}]})
})

app.listen(port , () =>{
    console.log(`APP RUNNING at http://localhost:${port}`)
})