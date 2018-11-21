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

app.get('/pizzas', (req,res) => {
    const name = req.params.names;
        res.status(200);
        res.send({
            pizzas: [
                {
                    name: 'pepperoni',
                    price: 12.99
                },
                {
                    name: "hawiian",
                    price: 15.99
                }
            ]
        })
})

app.get('/cookies', (req,res) => {
    const name = req.params.names;
        res.status(200);
        res.send({
            cookies: ['chocolate chip', 'penut butter', 'heath bar']
        })
})

app.listen(port, () => {
    console.log(`now listening on port: ${port}`);
}) 