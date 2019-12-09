const mongoose = require('mongoose');

const Student = mongoose.model(
  'Student',
  new mongoose.Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    isAdmitted: {
      type: Boolean,
    },
  }),
);

module.exports = {
  Student,
};
