// GET SLOTS

const getSlots = (reservationDate) => {
    console.log("Fecha enviada a la consulta SQL:", reservationDate);
    return db.query('SELECT * FROM Timeslots WHERE DATE(ReservationDate) = ?', [reservationDate]);
};


module.exports = {
    getSlots
}