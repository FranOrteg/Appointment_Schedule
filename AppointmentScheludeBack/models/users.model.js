// Create Customer

const createCustomer = ({ Name, Surname, Phone, Email, Password }) => {
    return db.query('INSERT INTO Customers (Name,Surname,Phone,Email,Password) VALUES (?,?,?,?,?)',
        [Name, Surname, Phone, Email, Password]
    );
}

// Get Customer

const getCustomerByID = (customerId) => {
    return db.query('SELECT * FROM Customers WHERE ID = ?', [customerId]);
}

// Get User by Email

const getUserByEmail = (email) => {
    return db.query('SELECT * FROM Customers WHERE Email = ?', [email]);
}

module.exports = {
    createCustomer,
    getCustomerByID,
    getUserByEmail
}