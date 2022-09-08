var mysql = require("mysql2")
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'201241',
    database:'juegos_pirata'
}
);

con.connect(
    (err)=>{
        if(!err){
            console.log('Conectado')
        }else{
            console.log('Error de conexion')
            console.log(err)
        }
    }
);
module.exports = con;
