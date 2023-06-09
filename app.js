const express = require('express');
const sql = require('mssql');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = 8000;

// Set path to static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Connection string parameters.
let config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: 'localhost',
    database: process.env.DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

// API to connect to database and execute query.
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Connect to database and await response
        let pool = await sql.connect(config);
        console.log('Pool:', pool);

        console.log('Connected to database');

        let request = pool.request();

        // Set parameters
        request.input('users', sql.VarChar(50), username);
        request.input('passwords', sql.VarChar(50), password);

        // Execute stored procedure
        let result = await request.execute('dbo.InsertCredentials');
        res.status(200).render('login', { message: 'Login successful. Credentials are stored in DB' });
   } catch (err) {
       console.error(err);
       res.status(500).render('login', { message: 'Login failed' });
   }
});

// API to deploy init app page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use((req, res) => {
    res.status(400);
    res.type('text/plain');
    res.send('<h1>404 - Not Found</h1>');
});

// API to launch server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
