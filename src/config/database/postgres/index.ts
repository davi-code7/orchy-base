import { Sequelize, Op } from 'sequelize';

const connection: Sequelize = new Sequelize(
  process.env.ORCHYBASE_POSTGRES_DATABASE,
  process.env.ORCHYBASE_POSTGRES_USERNAME,
  process.env.ORCHYBASE_POSTGRES_PASSWORD,
  {
    host: process.env.ORCHYBASE_POSTGRES_HOST,
    port: 5432,
    dialect: 'postgres',
    // dialectOptions: {
    //   ssl: 'Amazon RDS',
    // },
    // pool: { max: 5, idle: 30 },
    // ssl: true,
    define: {
      timestamps: false,
      underscored: true,
    },
    retry: {
      match: [
        /ETIMEDOUT/,
        /EHOSTUNREACH/,
        /ECONNRESET/,
        /ECONNREFUSED/,
        /ETIMEDOUT/,
        /ESOCKETTIMEDOUT/,
        /EHOSTUNREACH/,
        /EPIPE/,
        /EAI_AGAIN/,
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
      ],
      max: 5,
    },
    operatorsAliases: {
      $gt: Op.gt,
      $lt: Op.lt,
      $gte: Op.gte,
      $lte: Op.lte,
      $eq: Op.eq,
      $or: Op.or,
      $and: Op.and,
    },
  },
);

export default connection;
