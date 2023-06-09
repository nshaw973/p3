const { Schema, model } = require('mongoose');
const User = require('./User');
const Job = require('./Job');

const recruiterSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    agency: {
      type: String,
      required: true,
      maxLength: 50,
    },
    jobs: {
      type: [String],
      ref: 'Job'

    },
    desiredRoles: {
      type: String,
      default: [],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  });
 
module.exports = recruiterSchema