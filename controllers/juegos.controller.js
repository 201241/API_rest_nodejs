var conexion = require('../config/conexion');
var juego = require('../model/juego');

module.exports={

    getJuegos:function(req,res) {
        juego.obtener(conexion, function (err, datos){
            console.log(datos)            
             res.json(datos);
        })
        
    },
    postJuego:function(req,res) {
        console.log(req.body)
        juego.crear(conexion, req.body, function (err, respuesta){
            console.log(respuesta)            
            res.json(respuesta);
        })        
        
    },
    deleteJuego:function(req,res) {
        console.log(req.body)
        juego.borrar(conexion, req.body, function (err, respuesta){
            console.log(respuesta)            
            res.json(respuesta);
        })        
        
    },
    updateJuego:function(req,res) {
        console.log(req.body)
        juego.actualizar(conexion, req.body, function (err, respuesta){
            console.log(respuesta)             
            res.json(respuesta);
        })        
        
    }
}

