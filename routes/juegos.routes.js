var express = require('express');
var router = express.Router();

const juegosController = require("../controllers/juegos.controller")

/* GET home page. */
router.get('/', juegosController.index);
router.post('/post_juegos', juegosController.postJuego);
router.delete('/delete_juego', juegosController.deleteJuego);
router.put('/update_juego', juegosController.updateJuego);

module.exports = router;