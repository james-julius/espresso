import express from 'express'
import cron from 'node-cron'
import logger, { resetLogFile } from './logger'
import runEspressoDelivery from './espresso'
import dotenv from 'dotenv'
import configureSentry from './config'

dotenv.config()
configureSentry();

const appsToGiveEspressoTo = [
    'https://carpoolio.vercel.app/'
];

const app = express()

/** Run espresso delivery every 14 minutes */
cron.schedule('*/14 * * * *', () => {
  runEspressoDelivery(appsToGiveEspressoTo);
});

/** Clear log file every 7 days */
cron.schedule('0 0 */7 * *', () => {
    resetLogFile();
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    logger.info('Server is running on port 3000');
});