const http = require('http');
const fs = require('fs');

//pasamos una funcion para crear un servidor y esto basicamente es un detector de eventos continuos 
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Mesaage</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Hello Gy');//dentro de este archivo de escritura toma una ruta al archivo y solo se usara el nombre del archivo para crearlo en la misma carpeta de la app.js
        res.statusCode = 302;
        res.setHead('Location', '/');//permite escribir cierta metainformacion
        return res.end();//esto es necesario para no tener error 
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>My First Page</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);