const express = require('express')
const app = express()
const path = require('path');
// const port = 3002
const port = process.env.PORT || 3002;

const request = require('request');
// const port = process.env.PORT || 3002;
//

const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'client/build')));



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/saveAsScen', function (req, res) {
    console.log('mike!');
    var dataarr = req.body.split("$")
    var inp_items = JSON.parse(dataarr[0]);
    console.log(req.body);
    console.log(typeof req.body);

    res.send('sent')




  })
