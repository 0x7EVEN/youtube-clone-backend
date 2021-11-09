const mongoose = require("mongoose");

const likeDislike = new mongoose.Schema({
     type: {
          type: String,
          enum: ['like', 'dislike'],
          required: [true, 'Type is required either like or dislike']
     },
     videoId: {
          type: mongoose.Schema.ObjectId,
          ref: 'Video',
          required: [true, 'Video id is required']
     },
     userId: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          required: true
     }
}, {
     timestamps: true,
});

module.exports = mongoose.model("likeDislike", likeDislike);