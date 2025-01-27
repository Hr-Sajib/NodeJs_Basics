const http = require('http');
const fs = require('fs')

// creating a raw node js server 

const server = http.createServer();


// listener 
server.on('request', (req,res)=>{
    if(req.url === 'read-file'&& req.method === 'GET');
     
        // read file for streaming 
        const readableStream = fs.createReadStream(process.cwd()+'/read.txt')

        readableStream.on('data', (buffer)=>{
            res.statusCode = 200;
            res.write(buffer);
        })

        readableStream.on('end',()=>{
            res.statusCode = 200;
            res.end('Hello from server...')
        })
    
        readableStream.on('error',(error)=>{
            console.log(error);
            res.statusCode = 500;
            res.end('Something went really wrong!')
        })
    

    
})

server.listen(5300,()=>{
    console.log('Server listennig in port 5300...')
})

