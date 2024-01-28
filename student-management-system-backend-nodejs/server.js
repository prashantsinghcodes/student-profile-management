const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/api/users', (req, res) => {
    const user = {
        studentName : "Prashant Singh",
        phone : "08376818782"
    };
    res.json(user);
  });

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});