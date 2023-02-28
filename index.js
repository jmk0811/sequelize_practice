const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test-db", "root", "root", {
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