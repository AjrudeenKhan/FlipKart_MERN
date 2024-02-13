
// import dotenv from 'dotenv';
// import cors from 'cors';
// import Connection from './database/db.js';
// import DefaultData from './default.js';
// import DefaultDataThree from './default-three.js';
// import Router from './routes/route.js';
// import bodyParser from 'body-parser';
// import express from 'express';

// const app = express();
// dotenv.config();
//  app.use(cors());

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', Router);

// // const PORT = process.env.PORT || 8000;
// const PORT = 8000;

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

// Connection(USERNAME, PASSWORD);

// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT} `);
//   DefaultData();
//   DefaultDataThree();
// });


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import DefaultDataThree from './default-three.js';
import Router from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
//  app.use(cors());


const corsOptions = {
  origin: 'https://flip-kart-mern-froentend.vercel.app/', // Update with your actual frontend domain
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
  DefaultData();
  DefaultDataThree();
});
