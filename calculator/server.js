const express = require('express');
const app = express();

app.get('/tip/:total/:tipPercentage', (req, res)=> {
    const total = Number(req.params.total);
    const tipPercentage = Number(req.params.tipPercentage);
    const tipAmount = (total * (tipPercentage / 100));
    res.send(`${tipAmount}`);
})





app.listen(3000, () => {
    console.log('listening');
});