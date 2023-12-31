import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Connection from './database/db.js'
import DefaultData from './default.js'
//import DefaultData2 from './default2.js'
//import DefaultData3 from './default3.js'
//import DefaultData4 from './default4.js'
//import DefaultDataFive from './defaultf.js'
import DefaultDataThree from './default-three.js'
import Router from './routes/route.js'
import bodyParser from 'body-parser'
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router)
const PORT  = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT,()=>
{

    console.log(`server is running on port ${PORT} `)
    DefaultData();
   // DefaultData2();
    //DefaultData3();
    // DefaultData4()
   // DefaultDataFive();
   DefaultDataThree();
}
)

