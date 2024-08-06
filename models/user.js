const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: [foodSchema],
});

// user.js

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});


const User = mongoose.model('User', userSchema);
const Food = mongoose.model('Food', foodSchema);

module.exports = User;
module.exports = Food;