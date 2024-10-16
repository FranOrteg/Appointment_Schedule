// GET SLOTS

const getSlots = (reservationDate) => {
    console.log("Fecha enviada a la consulta SQL:", reservationDate);
    return db.query('SELECT * FROM Timeslots WHERE DATE(ReservationDate) = ?', [reservationDate]);
};

// RESERVE SLOTS

const reserveSlot = (slotId) => {
    return db.query('UPDATE Timeslots SET Available = 0 WHERE ID = ?', [slotId]);
};

module.exports = {
    getSlots,
    reserveSlot,
}