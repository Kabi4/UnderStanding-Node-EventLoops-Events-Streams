const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => {
    console.log('TIMER 1 FINISHED');
}, 0);
setImmediate(() => {
    console.log('Immediate 1 Excecuted');
});

fs.readFile('test-file.txt', () => {
    console.log('I/o Finished');
    setTimeout(() => {
        console.log('TIMER 2 FINISHED');
    }, 0);
    setTimeout(() => {
        console.log('TIMER 3 FINISHED');
    }, 3000);
    setImmediate(() => {
        console.log('Immediate 2 Excecuted');
    });

    process.nextTick(() => {
        console.log('NEXT TICK HAPPENDED');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log((Date.now() - start) / 1000, 'Password Encrypted');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log((Date.now() - start) / 1000, 'Password Encrypted');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log((Date.now() - start) / 1000, 'Password Encrypted');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log((Date.now() - start) / 1000, 'Password Encrypted');
    });
});

console.log('Hello From the top level');
