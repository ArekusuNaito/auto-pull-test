
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const webServer = express();
const port = 8888;

webServer.use(cors());
webServer.use(bodyParser.json());

webServer.get(`/ping`,(request,response)=>
{
    console.log(`Ping!`);
    response.status(200).send(`Pong!`);
})

webServer.post(`/push`,(request,response)=>
{
    console.log(`You pushed!`);
    response.status(200).send(`Did you push something?`);
})



webServer.use((req, res, next) => {
    res.status(404).send("404 NOT FOUND 😭");
})

webServer.listen(port,()=>
{
    console.log('Listening...');
})


console.log(`Web server initialized`);