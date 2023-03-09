const express = require('express')
const {types, Pool} = require('pg');
const TIMESTAMP_OID = 1082;
types.setTypeParser(TIMESTAMP_OID, (timestamp) => timestamp);
const bodyParser = require('body-parser')
const globalResponse = require('./standartResponse')
require('dotenv').config()
const helmet = require("helmet");
const cors = require('cors');

const pool = new Pool({
    connectionString: process.env.connection_string,
})

pool.connect()

const app = express()
const router = express.Router({mergeParams: true})

app.use(helmet());
app.use(cors());
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(function (req, res, next) {
    res.success = function (data) {
        if (data === undefined) {
            data = null
        } else if (data.length === 0 || Object.keys(data).length === 0) {
            data = null;
        }
        res.json(globalResponse(true, 'success', data))
    }
    next();
});

app.use(function (req, res, next) {
    res.error = function (message) {
        res.json(globalResponse(false, message, null));
    }
    next();
});

app.use(function (error, req, res, next) {
    if (error instanceof SyntaxError) {
        res.json(globalResponse(false, "Bad Request"))
    } else {
        next();
    }
});

module.exports = {
    pool: pool,
    app: app,
    router: router
}
