const router = require('express').Router();

const { getSlots } = require('../../models/timeslots.model');

// GET SLOTS BY DAY
router.get('/:date', async (req,res)=> {

    const { date } = req.params;
    console.log(date, "fecha recibida del cliente");
    
    
    try {
        const [result] = await getSlots(date);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message});
    }
});


module.exports = router;