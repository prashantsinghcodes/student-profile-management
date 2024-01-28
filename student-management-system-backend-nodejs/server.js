const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


  app.post('/student/save', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    res.json({ message: 'User created successfully' });
  });  

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});