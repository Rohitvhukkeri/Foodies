const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
require('dotenv').config();
require('express-async-errors')
const path = require('path');

//express
const app = express()

//route
const authRouter = require('./route/authRoute')

// configuration
app.use(cors());
app.use(cookieParser(process.env.REF_TOKEN_SECRET));
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`/api/v1/auth`, authRouter)

const PORT = process.env.PORT || 7000;
const connectDB = require('./db')


if(process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
     app.use(express.static(`client/build`))

    app.use(`*`,(req,res) => {
        res.sendFile(path.join(__dirname + `/client/build/index.html` ))
    });
}

const start = async ()=> {
    try {
        await connectDB(url)
        app.listen(PORT,() => {
            console.log(`server is listening on port http://localhost:${PORT}`)
        })
    } catch (err) {
        throw err;
    }
}

start()