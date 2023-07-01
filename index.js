const express   = require('express');
const mailer    = require('./mailer');

const app = express();

app.use(express.json())
app.use('/',async function(req,res){
    const {email,message} = req.body;
    await mailer.main(email,message)
    res.json({
        email,message
    })
})

app.listen(3000);
console.log('La aplicacion está escuchando en http://localhost:3000');
