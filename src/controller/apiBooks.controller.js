const connection = require("../database")



function postRegistro(request, response) {
    console.log(request.body);
    let sql = "INSERT INTO usuario (nombre, apellidos , correo, foto, password)" +
        " VALUES ('" + request.body.nombre + "', '" +
        request.body.apellidos + "' , '" +
        request.body.correo + "' , '" +
        request.body.foto + "' , '" +  request.body.password + "')";

    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else {
                response.send("-1");
            }
        }
    })
}
function postLogin(request, response) {
    console.log(request.body);
    let sql = `SELECT id_usuario, nombre , correo, foto FROM usuario WHERE correo='${request.body.correo}' AND password='${request.body.password}'`
  

    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            console.log(result);
            if (result.length > 0)
                response.send(result[0]);
            else {
                response.send("los datos son incorrectos");
            }
        }
    })
}


module.exports = {postRegistro, postLogin};