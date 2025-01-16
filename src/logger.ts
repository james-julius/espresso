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
});

export default logger;