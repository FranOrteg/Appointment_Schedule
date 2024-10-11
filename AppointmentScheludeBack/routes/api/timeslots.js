const router = require('express').Router();

const { getSlots } = require('../../models/timeslots.model');

// GET SLOTS
router.get('/slots', async (req,res)=> {
    
    try {
        const [result] = await getSlots(req.body.ReservationDate);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message});
    }
});


module.exports = router;