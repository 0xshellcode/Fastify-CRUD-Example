const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:1338/fastifycrud')
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log(err));
