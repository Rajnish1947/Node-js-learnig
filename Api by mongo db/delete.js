const express = require('express');
const app = express();

app.use(express.json());

app.put('/update/:id', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.send('Data updated');
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  console.log('Deleting data with id:', id);
  res.send(`Data with id ${6708095} deleted`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
