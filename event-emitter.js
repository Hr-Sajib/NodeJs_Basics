const EventEmitter = require('events');

const myEmitter = new EventEmitter()

// listen 

myEmitter.on('birthday', ()=>{
    console.log('Happy Badde 2 U...')
})

myEmitter.emit('birthday')