const { createCustomer } = require('../../models/users.model')

const router = require('express').Router();

router.get('/', (req, res)=>{
	res.send('Hola Usuarios');
});

// CUSTOMER SING UP
router.post('/signup', async ( req,res) => {
    try {
        const [result] = await createCustomer(req.body);
        res.json(result);
    }catch (error){
        res.json({fatal: error.message})
    }
})

module.exports = router;