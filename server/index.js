const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (request, response) => {
    response.status(200);
    response.send('yayyyyyyyyyyy it works');
});

app.get('/hello/:name', (request, response) => {
    const { name } = request.params;
        response.status(200);
        response.send(`Hello ${name}`)
});

app.listen(port, () => {
    console.log(`now listening on port: ${port}`);
}) 