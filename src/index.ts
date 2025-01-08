import express from 'express'
import cron from 'node-cron'
import logger, { clearLogFile } from './logger'
import runEspressoDelivery from './espresso'
const app = express()

const appsToGiveEspressoTo = [
    'https://carpoolio.vercel.app/'
];

/** Run espresso delivery every 14 minutes */
cron.schedule('*/14 * * * *', () => {
  runEspressoDelivery(appsToGiveEspressoTo);
});

/** Clear log file every 7 days */
cron.schedule('0 0 */7 * *', () => {
    clearLogFile();
});


app.listen(3000, () => {
    logger.info('Server is running on port 3000');
});
