const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const errorHandler = require('./middleware/error');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobTypeRoutes = require('./routes/jobTypeRoutes');
const jobRoutes = require('./routes/jobRoutes');

//database connecton
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB connected!'))
    .catch((err) => console.log(err));


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}));
app.use(cookieParser());
app.use(cors({
    origin: "https://jobsfinder-app.netlify.app",
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Accept",
      "Origin",
      "X-Requested-With",
      "Authorization",
      "Set-Cookie",
    ],
}));

//ROUTES MIDDLEWARE
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobTypeRoutes);
app.use('/api', jobRoutes);

//error middleware
app.use(errorHandler);

//port
const port  = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});