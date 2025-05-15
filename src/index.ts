import express from 'express'
import cron from 'node-cron'
import logger from './logger'
import runEspressoDelivery from './espresso'
import dotenv from 'dotenv'
import configureSentry from './config'

dotenv.config()
configureSentry();

const appsToGiveEspressoTo = [
    'https://carpoolio.onrender.com/',
    'https://backsplash-fastapi.onrender.com/'
];

const app = express()

/** Run espresso delivery every 14 minutes */php
cron.schedule('*/14 * * * *', () => {
  runEspressoDelivery(appsToGiveEspressoTo);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    logger.info('Server is running on port 3000');
});