const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master Process : ${process.pid}`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid} worker exit`);
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>');
    setTimeout(() => process.exit(1), 1000);
    res.end();
  }).listen(8080);

  console.log(`${process.pid} worker run`);
}
