const { Schema, model } = require('mongoose');
const projectSchema = require('./Project').schema;
const jobSchema = require('./Job').schema;

const developerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project',
  }],
  githubUrl: {
    type: String,
  },
  jobsAppliedTo: {
    type: Schema.Types.ObjectId,
    ref: "Jobs",
  },
  favoriteRecruiters: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = developerSchema;
