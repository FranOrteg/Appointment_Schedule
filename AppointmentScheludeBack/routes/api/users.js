const { createToken } = require('../../helpers/utils');
const { createCustomer, getUserByEmail } = require('../../models/users.model')

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
});

// CUSTOMER SING IN
router.post('/signin', async (req, res) => {
	try {
        const [result] = await getUserByEmail(req.body.Email);
        if (result.length === 0){
            return res.json({ fatal: 'Password or email Wrong'});
        }
        const user = result[0];
        res.json({
            success: 'Login Success',
            token: createToken(user)
        })
    } catch (error) {
        res.json({ fatal: error.message});
    }
});

module.exports = router;