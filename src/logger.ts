import pino from 'pino';

const logger = pino({
    name: 'espresso',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'SYS:standard'
        }
    }
})

export default logger;