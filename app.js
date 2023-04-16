const express = require('express');
const sql = require('mssql');
const path = require('path');

const app = express();
const port = 8000;

// Connection string parameters.
const config = {
    user: 'root',
    password: '',
    port: 1434,
    database: 'test',
    server: 'localhost',
}
