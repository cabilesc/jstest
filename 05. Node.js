console.log('hello world');

process.on('exit', function(){
    // do somthing
})

global.luckyNum = '55'

console.log(global.luckyNum)

console.log(process.platform);

console.log(process.env.USER);

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum')
})
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

