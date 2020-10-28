const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 6000;

// Parse body request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/item', (req, res) => {
  console.log(req.body);
  res.send(`Llego ${JSON.stringify(req.body)}`);
});

app.listen(PORT, () => {
  console.log('SERVER LISTEN IN PORT ', PORT);
});
