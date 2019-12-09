const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/greeting', (req, res) => {
    res.send({
        message: `Hello, ${req.query.name || 'World'}!`
    });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));