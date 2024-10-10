const jwt = require('jsonwebtoken');
const { getCustomerByID } = require('../models/users.model');

const checkToken = async (req, res, next) => {

    const token = req.headers['authorization'];

    if(!token) {
        return res.json({ fatal: 'No token provided'});
    }

    let obj;
    try {
        obj = jwt.verify(token, 'peluker');
    } catch (error) {
        return res.json({ fatal: 'Wrong token' });
    }

    const [user] = await getCustomerByID(obj.ID);
    console.log(user);
    req.user = user[0];

    next();
}

module.exports = {
    checkToken
}