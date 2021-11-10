const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
     owner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
     },
     name: {
          type: String,
          required: [true, 'video name is required to upload video']
     },
     videoPath: {
          type: String,
          required: [true, 'video path is required to upload video'],
          unique: [true, 'video path is already exist']
     },
     likes: {
          type: Number,
          default: 0
     },
     disLikes: {
          type: Number,
          default: 0
     },
     views: {
          type: Array,
          default: []
     },
     comment: {
          type: Array,
          default: []
     }
});
module.exports = mongoose.model('video', videoSchema);
