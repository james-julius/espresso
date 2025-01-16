import pino from 'pino';
import fs from 'fs';

const logger = pino({
    name: 'espresso',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'SYS:standard',
            destination: './logs/app.log'
        }
    }
}, pino.destination({
    dest: './logs/app.log',
    sync: false // asynchronous logging for better performance
}));

export const resetLogFile = () => {
    fs.writeFile('./logs/app.log', '', (err) => {
        if (err) {
            logger.error('Error resetting log file:', err);
            return;
        }
        logger.info('Log file reset successfully');
    });
};

export default logger;