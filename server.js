const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');
const topicsRouter = require('./routes/topics')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}


app.use(cors());
app.use(express.json());
app.use('/api/topics', topicsRouter)


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
