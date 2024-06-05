const { parentPort } = require('worker_threads');

let count = 0;
for (let i = 0; i < 4_000_000_000; i++) {
    // Simulate CPU Work: a computation that takes a long time 
    count++
}

parentPort.postMessage(count);