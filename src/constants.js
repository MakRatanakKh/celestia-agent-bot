import 'dotenv/config';

const env = process.env;

const ENV = {
    TELEGRAM_BOT_TOKEN: env.TELEGRAM_BOT_TOKEN,
};

export { ENV };