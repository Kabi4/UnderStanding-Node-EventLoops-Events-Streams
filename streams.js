const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //Reading File Directily
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.end(data);
    //     }
    // });
    //Reading Files in chunks Moving chunks so that less memory is used
    // const readedData = fs.createReadStream('test-file.txt');
    // readedData.on('data', (chunk) => {
    //     res.write(chunk);
    // });
    // readedData.on('end', () => {
    //     res.end();
    // });
    //  readedData.on("error",()=>{
    //  console.log(err);
    //  res.end('File not Found');
    //  res.statusCode = 500;
    //  })
    //Reading Files with pipe to Maitian the Balance between the sending and managing in reciving data so data dont overflow and create backpressure!
    const readedData = fs.createReadStream('test-file.txt');
    readedData.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Lisenting on port 8000');
});
