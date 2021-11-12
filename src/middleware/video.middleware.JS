const multer = require("multer");
const uuid = require("uuid");

const uuidv4 = uuid.v4;

const videoStorage = multer.diskStorage({
    destination: 'src/videos',
    filename: (req, file, cb) => {
        const id = uuidv4();
        const token = req.token;
        console.log("token--->", token);
        const filename = `${token.username.toString()}-${id}`;
        req.filename = filename;
        cb(null, filename);
    }
});
const videUpload = multer({
    storage: videoStorage,
    limits: {
        fileSize: 9000000 * 5
    },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(mp4|jpg|png|MPEG-4|mkv)$/)) {
            return cb(new Error("video format not supported"));
        }
        cb(undefined, true);
    }
});


// const thumbnailStorage = multer.diskStorage({
//     destination: "src/videos",
//     filename: (req, file, callback) => {
//         const id = uuidv4();
//         const token = req.token;
//         const filename = `thumbnail-${token._id.toString()}-${id}`;
//         req.thumbnail = filename;
//         callback(null, filename);
//     }
// });
// const thumbnail = multer({
//     storage: thumbnailStorage
// });

module.exports = {videUpload};