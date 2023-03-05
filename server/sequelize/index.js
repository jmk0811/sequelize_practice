const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("snmp", "root", "root1234", {
  host: "localhost",
  dialect: "mysql"
});

sequelize.authenticate().then(() => {
  console.log("Connection successful!");
}).catch((err) => {
  console.log("Error connecting to database.");
  console.log(err);
});

console.log("Test @@");