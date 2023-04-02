const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

//port
const port  = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});