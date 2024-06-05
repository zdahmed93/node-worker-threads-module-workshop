const express = require('express');
const { Worker } = require('worker_threads');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/compute', (req, res) => {
    const worker = new Worker('./worker-thread.js');
    worker.on('message', (msg) => {
        res.send(`Ok ${msg}`);
    });
})

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});