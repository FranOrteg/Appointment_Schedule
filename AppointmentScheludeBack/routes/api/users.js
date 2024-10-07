const router = require('express').Router();

router.get('/', (req, res)=>{
	res.send('Hola Usuarios');
});

module.exports = router;