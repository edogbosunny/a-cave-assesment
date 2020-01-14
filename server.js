import express from 'express';
import cluster from 'cluster';
import mongoose from 'mongoose';
import * as os from 'os';
import http from 'http';
import * as dotenv from 'dotenv';
import keys from './src/config/keys';

dotenv.config({ silent: true });

// require('dotenv').config({ silent: true });


const port = process.env.PORT || 5000;


const app = express();

/**
 * DB Config
 */
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Mongo DB Connected'))
  .catch((err) => console.log(err));

const workers = [];

/**
 * Setup number of worker processes to share port which will be defined while setting up server
 */
const setupWorkerProcesses = () => {
  // read the number of cores the system has...
  const numCores = os.cpus().length;
  console.log('Master cluster setting up ' + numCores + ' workers');
  // iterate on number of cores need to be utilized by an application
  // current example will utilize all of them
  for (let i = 0; i < numCores; i += 1) {
    // creating workers and pushing reference in an array
    // these references can be used to receive messages from workers
    workers.push(cluster.fork());

    // to receive messages from worker process
    workers[i].on('message', (message) => {
      console.log(message);
    });
  }
  // process is clustered on a core and process id is assigned
  cluster.on('online', (worker) => {
    console.log('Worker ' + worker.process.pid + ' is listening');
  });
  // if any of the worker process dies then start a new one by simply forking another one
  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
    console.log('Starting a new worker');
    cluster.fork();
    workers.push(cluster.fork()); // to receive messages from worker process
    workers[workers.length - 1].on('message', (message) => {
      console.log(message);
    });
  });
};
const setUpExpress = () => {
  // create server
  app.server = http.createServer(app);

  app.disable('x-powered-by');

  // start server
  app.server.listen(port, () => {
    console.log(`Started server on => http://localhost:${app.server.address().port} for Process Id ${process.pid}`);
  });

  // in case of an error
  app.on('error', (appErr, appCtx) => {
    console.error('app error', appErr.stack);
    console.error('on url', appCtx.req.url);
    console.error('with headers', appCtx.req.headers);
  });
};

/**
 * Setup server either with clustering or without it
 * @param isClusterRequired
 * @constructor
 */
const setupServer = (isClusterRequired) => {
  // if it is a master process then call setting up worker process
  if (isClusterRequired && cluster.isMaster) {
    setupWorkerProcesses();
  } else {
    // to setup server configurations and share port address for incoming requests
    setUpExpress();
  }
};

setupServer(true);

export { app };
