const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = 8000;
const assocRoute = require('./routes/associations');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.use('/associations',  assocRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);