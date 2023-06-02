
let express = require('express');
let path = require('path');

const app = express();
const PORT = process.env.PORT || 1986;

app.get('/',(req, res) => {

    res.sendFile(path.join(__dirname, '/mapv1.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });