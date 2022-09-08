module.exports={
    obtener:function(conexion, funcion) {
        conexion.query("SELECT * FROM juegos", funcion);
    },
    crear:function(conexion, datos,funcion) {
        conexion.query(" INSERT INTO juegos (nombre, plataforma, descripcion, genero, desarrolladora) VALUES ('"+datos["nombre"]+"', '"+datos["plataforma"]+"', '"+datos["descripcion"]+"', '"+datos["genero"]+"', '"+datos["desarrolladora"]+"') ", funcion);
    },
    borrar:function(conexion, datos,funcion) {
        conexion.query(" DELETE FROM juegos WHERE id="+datos['id']+";", funcion);
    },
    actualizar:function(conexion, datos,funcion) {
        conexion.query(" UPDATE juegos SET nombre='"+datos["nombre"]+"', plataforma='"+datos["plataforma"]+"' , descripcion='"+datos["descripcion"]+"', genero='"+datos["genero"]+"', desarrolladora='"+datos["desarrolladora"]+"' WHERE id="+datos["id"]+"; ", funcion);
    }
}