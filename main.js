
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ExecuteShell = require('child_process').exec;



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
    ExecuteShell('git reset -hard HEAD && git pull',(error,output,stdError)=>
    {
        if(!error)
        {
            console.log("~ Successful auto code update ~")
            console.log(output);
            console.log("~ ~ ~");
            response.sendStatus(200);
        }
        else
        {
            console.error('~ Error auto updating code ~');
            console.log(error);
            console.log("~ ~ ~");
            response.sendStatus(500);
        }
    })
})



webServer.use((req, res, next) => {
    res.status(404).send("404 NOT FOUND 😭");
})

webServer.listen(port,()=>
{
    console.log(`Listening... ${port}`);
})


console.log(`Web server initialized`);