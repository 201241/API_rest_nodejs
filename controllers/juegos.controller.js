var conexion = require('../config/conexion');
var juego = require('../model/juego');

module.exports={

    index:function(req,res) {
        juego.obtener(conexion, function (err, datos){
            console.log(datos)
            //res.render('juegos/index', {title: 'Aplicacion'});        
             res.json(datos);
        })
        
    },
    postJuego:function(req,res) {
        console.log(req.body)
        juego.crear(conexion, req.body, function (err, respuesta){
            console.log(respuesta)            
            res.json(respuesta);
        })
        //res.json(req.body["nombre"]);
        
    },
    deleteJuego:function(req,res) {
        console.log(req.body)
        juego.borrar(conexion, req.body, function (err, respuesta){
            console.log(respuesta)            
            res.json(respuesta);
        })
        //res.json(req.body["nombre"]);
        
    },
    updateJuego:function(req,res) {
        console.log(req.body)
        juego.actualizar(conexion, req.body, function (err, respuesta){
            console.log(respuesta)             
            res.json(respuesta);
        })
        //res.json(req.body["nombre"]);
        
    }
}

