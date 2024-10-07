// Create Customer

const createCustomer = ({ Name, Surname, Phone }) => {
    return db.query('INSERT INTO Customers (Name,Surname,Phone) VALUES (?,?,?)',
        [Name, Surname, Phone]
    );
}

module.exports = {
    createCustomer
}