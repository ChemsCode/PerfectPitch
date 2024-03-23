require('dotenv').config();
const PORT = process.env.PORT || 3500;
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require("./config/corsOptions");
const errorHandler = require('./middleware/errorHandler');
const credentials = require('./middleware/credentials');

app.use(cors(corsOptions));
app.use(express.json());
app.use(credentials);

//serve static files
app.use(express.static('public'));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});