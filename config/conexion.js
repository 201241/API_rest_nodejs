var mysql = require("mysql2")
var con = mysql.createConnection({
    host:'bbp5cxgsmuppcy0gronn-mysql.services.clever-cloud.com',
    user:'uqpgc6csxxlxupws',
    password:'fwWxRUdzYPNeuCQ9K8Iz',
    database:'bbp5cxgsmuppcy0gronn',
    portdb: 3306,
}
);


/* var con = mysql.createConnection({
    host:'3.91.191.180',
    user:'eliancruz',
    password:'201241',
    database:'juegos_pirta',
    portdb: 3306,
}
); */


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
