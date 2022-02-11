const http = require('http');

const server = http.createServer((req; res;) => {
    res.end('Réponse du serveur !');
})

server.listen(3000);