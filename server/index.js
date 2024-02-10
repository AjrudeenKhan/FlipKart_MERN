// // import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import Connection from './database/db.js';
// import DefaultData from './default.js';
// import DefaultDataThree from './default-three.js';
// import Router from './routes/route.js';
// import bodyParser from 'body-parser';
// import express from 'express'

// const app = express();
// dotenv.config();
// app.use(cors());

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', Router);

// // New route to serve the link
//  app.get('/flipkart', (req, res) => {
//    res.redirect('https://vercel.com/ajrudeen-khans-projects/flip-kart-mern-backend/5MZ13ifX8h3Pncm7UTHkFZYRZQmy');
//  });

// const PORT = 8000;

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;
// Connection(USERNAME, PASSWORD);

// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT} `);
//   DefaultData();
//   DefaultDataThree();
// });

// ............................................... 2 ...................................

// import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import DefaultDataThree from './default-three.js';
import Router from './routes/route.js';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

// Define the deployment link based on the environment
const DEPLOYMENT_LINK = process.env.NODE_ENV === 'production'
  ? 'https://vercel.com/ajrudeen-khans-projects/flip-kart-mern-backend/5vb4Sun9B88p8BSaKy61vRRav4gW'
  : 'http://localhost:8000'; // Update with your local development link

// New route to serve the link
app.get('/flipkart', (req, res) => {
  console.log('Redirecting to:', DEPLOYMENT_LINK);
  res.redirect(DEPLOYMENT_LINK);
});

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
  DefaultData();
  DefaultDataThree();
});
