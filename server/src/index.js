import app from './app';
import {logger} from './util';

app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  logger.info(`Experts-server listening at http://${host}:${port}`);
});

process.on('uncaughtException', err => logger.error('uncaught exception', err));

process.on('unhandledRejection', error => logger.error('unhandled rejection', error));

