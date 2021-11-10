
const express = require('express');
const {
     getCommentByVideoId,
     createComment,
     deleteComment
} = require('../controllers/comments');

const router = express.Router();

router
     .route('/')
     .post(createComment);

router.route('/:id').put(updateComment).delete(deleteComment);

router.route('/:videoId/videos').get(getCommentByVideoId);

module.exports = router;