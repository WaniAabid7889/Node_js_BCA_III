const express = require('express');
const port = process.env.PORT || 3004;
const app = express();
app.use(express.json());
require('./routes/users.routes')(app);

app.get('/', (req, res) => {
  res.status(200).send({ message: "Welcome to Express JS" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});