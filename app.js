const express = require('express');
const sql = require('mssql');
const path = require('path');
module.exports = require('./lib/tedious')

const app = express();
const port = 8000;

export function VarChar(number) {
    return undefined;
}

// Connection string parameters.
const config = {
    user: 'root',
    password: '',
    server: 'localhost',
    database: 'tests',
    port: 1433
};

// API to connect to database and execute query.
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Connect to database and await response
        let pool = await sql.connect(config);
        console.log('Connected to database');

        let request = pool.request();

        // Set parameters
        request.input('user', sql.VarChar(50), username);
        request.input('password', sql.VarChar(50), password);

        // Execute stored procedure
        let result = await request.execute('Insert_Credentials');
        res.status(200).render('login', { message: 'Login successful' });
   } catch (err) {
       console.error(err);
       res.status(500).render('login', { message: 'Login failed' });
   }
});

// API to deploy init app page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API to launch server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
