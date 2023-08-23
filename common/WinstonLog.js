import * as winston from 'winston'

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf((info) => {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    })
 ),
  transports: [
    //new winston.transports.File({ filename: 'app.log' }),
    new winston.transports.Console()
  ],
});
