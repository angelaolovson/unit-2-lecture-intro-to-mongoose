// import mongoose
const mongoose =require("mongoose");

// Database configuration
const DATABASE_URL = "mongodb+srv://angelaolovson:tab850hop577@sei.xcwuzcs.mongodb.net/?retryWrites=true&w=majority";

// mongoose connect to url
mongoose.connect(DATABASE_URL);

// export mongoose
module.exports = {mongoose};

