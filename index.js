import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.send("Welcome to Node Babel")
})

const server = app.listen(9000, function () {
  console.log(`Listening http://localhost:${server.address().port}`)
});
