import express from 'express';
import bodyParser from 'body-parser';

// importing routes
import moviesRoutes from './src/routes/movies.js';


// initializing
const app = express();

app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.send("Welcome to Node Babel")
});

// using routes
app.use('/api/movies', moviesRoutes);

const server = app.listen(9000, function () {
  console.log(`Listening http://localhost:${server.address().port}`)
});
