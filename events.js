const EventEmitter = require('events');

//const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}
const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('New Sale Happend!');
});

myEmitter.on('newSale', () => {
    console.log('Your user id is: k28dy1b4a');
});

myEmitter.on('newSale', (name) => {
    console.log('Costumer name:' + name);
});

myEmitter.emit('newSale', 'KUSHAGRA');

///////////////////////////////////

const server = require('http').createServer();

server.on('request', (req, res) => {
    console.log('Request received! for ' + req.url);
    res.end('Happy Hacking!!');
});

server.on('request', (req, res) => {
    console.log('Requesting Again!!for ' + req.url);
});

server.on('close', () => {
    console.log('Server Closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening On port 8000');
});
