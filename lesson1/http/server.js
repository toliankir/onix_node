const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
    res.write('Hello');
    console.log(req.url);
    res.end();
});

server.on('connection', () => {
    console.log('Client connected');
});

server.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server start on port ${PORT}`);
});
