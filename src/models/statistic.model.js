const { Schema, model } = require('mongoose')

const StatisticSchema = new Schema({
  name: String,
  totalTracksPlayed: Number,
  totalLikes: Number,
  tracksFailed: [{
    type: Schema.Types.ObjectId,
    ref: 'Track'
  }]
}, {
  timestamps: true
})
const StatisticModel = model('Statistic', StatisticSchema)
module.exports = StatisticModel