const mysql = require("mysql2");

let connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'lkl408tpoig34erm',
        database: 'appbooks'
    });
connection.connect( (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Conexion correcta.");
    };
});

module.exports = connection;