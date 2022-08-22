const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');
const port = 8000;
const heroesRoute = require('./routes/assocations');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.use('/heroes',  heroesRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);