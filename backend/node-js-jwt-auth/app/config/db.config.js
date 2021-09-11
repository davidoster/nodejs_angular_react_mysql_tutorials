module.exports = {
  HOST: "ra1.anystream.eu",
  PORT: 3012,
  USER: "tutorials",
  PASSWORD: "tutorials",
  DB: "tutorials",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
