const http = require('http');

const HOST = 'http://127.0.0.1';
const PORT = 3000;

http.get(`${HOST}:${PORT}`, (res) => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
}).on('error', err => {
    console.log(err);
});
