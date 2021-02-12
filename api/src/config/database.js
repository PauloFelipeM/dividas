require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  define: {
    useUTC: false,
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};
