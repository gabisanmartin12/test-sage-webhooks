const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Parse body request
app.use(bodyParser.json());

app.post('/item', (req, res) => {
  console.log(req.body);
  res.send(`Llego ${JSON.stringify(req.body)}`);
});

app.listen(6000, () => {
  console.log('SERVER LISTEN IN PORT ', 6000);
});
