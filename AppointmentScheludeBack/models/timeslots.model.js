// GET SLOTS

const getSlots = (reservationDate) => {
    return db.query('SELECT * FROM Timeslots WHERE ReservationDate = ?', [reservationDate]);
}

module.exports = {
    getSlots
}