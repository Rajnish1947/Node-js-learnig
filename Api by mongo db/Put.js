// ye tab use hota jab data api se update karna ho tab post method use karte hai 
//ye ham post method se bhi kar sakte but stand tarika ke liye put methode use karte hai
const express = require('express');
const app = express();

app.use(express.json());

app.put('/update/:id', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.send('Data updated');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

