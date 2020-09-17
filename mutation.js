const child = require('child_process');
const { stdout, stderr } = require("process");
const Execute = child.exec;
console.log(`Evolution Complete ~ Hive Created`);

Execute('ls',(error,stdOut,stdErr)=>
{
    console.log(`a ver: ${stdout}`);
    console.log(stdErr);
});
