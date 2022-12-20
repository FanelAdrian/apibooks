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
    let sql = `SELECT * FROM usuario WHERE correo='${request.body.correo}' AND password='${request.body.password}'`
  

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






const getLibros = (request, response) => {
    let libros;
    if(request.query.id_libro){
        libros = "SELECT * FROM libro WHERE libro.id_usuario=" + request.query.id_usuario + " AND id_libro=" + request.query.id_libro;
    }else {
    libros = "SELECT * FROM libro WHERE libro.id_usuario=" + request.query.id_usuario;
    }
    console.log(libros);  
    connection.query(libros, function (err, result) {
        if (err) 
            console.log(err);
        else {
            console.log(result)
            response.send(result);
        }
    })
}

// const getLibros2 = (request, response) => {
//     libros = "SELECT * FROM libro JOIN usuario ON (libro.id_usuario = usuario.id_usuario) WHERE libro.id_usuario=" + request.query.id_usuario + " AND id_libro=" + request.query.id_libro;
//     console.log(libros);  
//     connection.query(libros, function (err, result) {
//         if (err) 
//             console.log(err);
//         else {
//             console.log(result)
//             response.send(result);
//         }
//     })
// }

const postLibros = (request, response) => {
    console.log(request.body);
    let respuesta;
    let sql = `INSERT INTO libro (id_usuario,titulo, tipo, autor, precio, foto) 
                VALUES ('${request.body.id_usuario}', '${request.body.titulo}', '${request.body.tipo}',
                '${request.body.autor}', '${request.body.precio}', '${request.body.foto}')`;
    console.log(sql);                      
    connection.query(sql, (err, result) => {
        if (err) 
            console.log(err);
        else {
            console.log(result);
            if (result.insertId)
                respuesta = result;
            else
                respuesta ="-1";
        }
        response.send(respuesta)
    })
}

const putLibros = (request, response) => {
    console.log(request.body);
   
    let params = [
                  request.body.titulo, 
                  request.body.tipo, 
                  request.body.autor,
                  request.body.precio,
                  request.body.foto,
                  request.body.id_libro]
     
    let sql = "UPDATE libro SET titulo = COALESCE(?, titulo) ,"+
               "tipo = COALESCE(?, tipo) ," +   
               "autor = COALESCE(?, autor) ," +  
               "precio = COALESCE(?, precio),"+
               "foto = COALESCE(?, foto) "+
                "WHERE id_libro = ?";
    console.log(sql);
    connection.query(sql, params, (err, result) => {
        if (err) 
            console.log(err);
        else 
        { 
            response.send(result);
        }
    })
}

const deleteLibros = (request, response) =>{
    console.log(request.body);
    let sql = `DELETE FROM libro WHERE id_libro=${request.body.id_libro} `;
    console.log(sql); 
    connection.query(sql, (err, result) => {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}

module.exports = {postRegistro, postLogin, deleteLibros, putLibros, postLibros, getLibros};