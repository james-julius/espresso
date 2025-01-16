import pino from 'pino';
import fs from 'fs';
import path from 'path';

// Ensure logs directory exists
const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logPath = path.join(logDir, 'app.log');

// Create empty log file if it doesn't exist
if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, '');
}

const logger = pino({
    name: 'espresso',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'SYS:standard',
            destination: logPath
        }
    }
}, pino.destination({
    dest: logPath,
    sync: false // asynchronous logging for better performance
}));

export const resetLogFile = () => {
    fs.writeFile(logPath, '', (err) => {
        if (err) {
            logger.error('Error resetting log file:', err);
            return;
        }
        logger.info('Log file reset successfully');
    });
};

export default logger;