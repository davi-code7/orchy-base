require('dotenv').config();
module.exports = {
    database: process.env.ORCHYBASE_POSTGRES_DATABASE,
    username: process.env.ORCHYBASE_POSTGRES_USERNAME,
    password: process.env.ORCHYBASE_POSTGRES_PASSWORD,
    host: process.env.ORCHYBASE_POSTGRES_HOST,
    dialect: 'postgres',
    define: {
        timestamps: false,
        underscored: true,
    },
};
