
const {createServer} = require('node:http');

const hostname = '127.0.0.1';
const port = '3000';

const server = createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader('Contect-type' , 'text/plain');
    res.end('hello world');
});

console.log(WebAssembly);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

    
