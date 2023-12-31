const express = require('express');
const app = express();

app.get('/greeting', (req, res)=> {
    res.send('Hello, stranger');
})

app.get('/greeting/:name', (req, res)=> {
    const name = req.params.name
    res.send(`what's up ${name}`)
})



app.listen(3000, () => {
    console.log('listening');
});