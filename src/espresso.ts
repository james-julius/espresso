import axios from 'axios';
import logger from './logger';


const runEspressoDelivery = (appsToGiveEspressoTo: string[]) => {
    logger.info(`Running scheduled espresso delivery at ${new Date().toISOString()}`);
    axios.get(appsToGiveEspressoTo[0])
        .then(() => {
            logger.info(`Pinged ${appsToGiveEspressoTo[0]} successfully.`);
        }).catch((error) => {
            logger.error(`Error pinging ${appsToGiveEspressoTo[0]}`, error);
        });

    logger.info('Completed scheduled espresso delivery ☕️');
};

export default runEspressoDelivery;