const http = require('http');
const moment = require('moment');
const members = require('./members.js');
const users = require('./users.js');
const { fstat } = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-type', 'text/html');

    if(req.url === "/about") {
        res.write(JSON.stringify({
            'Status': "success",
            'Message': "response success",
            'Description': "Group Exercise #03",
          
            'Date': moment().format(),
            'Data': members
        }));
    }
    else if(req.url === "/users") {
        res.write(JSON.stringify({
            users
        }));
    }
    else {
        const fs = require('fs');
        res.write(fs.readFileSync('./index.html'));
    }

    res.end();
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});