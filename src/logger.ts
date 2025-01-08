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

export const clearLogFile = () => {
    fs.writeFile('./logs/app.log', '', (err) => {
        if (err) {
            logger.error('Error clearing log file:', err);
            return;
        }
        logger.info('Log file cleared successfully');
    });
};

export default logger;