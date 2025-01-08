import axios from 'axios';
import express from 'express'
import cron from 'node-cron'
import logger from './logger'

const app = express()

const runEspressoDelivery = () => {
    logger.info(`Running scheduled espresso delivery at ${new Date().toISOString()}`);
    axios.get(appsToGiveEspressoTo[0])
        .then(() => {
            logger.info(`Pinged ${appsToGiveEspressoTo[0]} successfully.`);
        }).catch((error) => {
            logger.error(`Error pinging ${appsToGiveEspressoTo[0]}`, error);
        });

    logger.info('Completed scheduled espresso delivery ☕️');
};

const appsToGiveEspressoTo = [
    'https://carpoolio.vercel.app/'
];

cron.schedule('*/14 * * * *', () => {
  runEspressoDelivery();
});

app.listen(3000, () => {
    logger.info('Server is running on port 3000');
});
