require('dotenv').config();
const PORT = process.env.PORT || 3500;
const express = require('express');
const app = express();



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});