const mongoose = require("mongoose");
const connect = async () => {
     // mongodb + srv://mpluser:01CkQDS5AghKuPME@cluster0.aywy9.mongodb.net/products?retryWrites=true&
     // mongodb + srv://mpluser:3vjJRPTvxuwh2XTq@cluster0.aywy9.mongodb.net/products?retryWrites=true&w=majority",
     // mongodb+srv://mpluser:01CkQDS5AghKuPME@cluster0.aywy9.mongodb.net/products?retryWrites=true&w=majority
     return mongoose.connect("mongodb+srv://youtube:dbUserPassword@cluster0.qhdmg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
module.exports = connect;
