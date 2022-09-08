const mongoose = require('mongoose');
const assert = require('assert');
url ="mongodb+srv://rohith:Hukkeri19@cluster0.ib3mh.mongodb.net/resapi?retryWrites=true&w=majority";

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true
    }, (err) => {
        if(err) assert.deepStrictEqual(err, null);
        console.log('mongodb connected successfully');
    });
}
module.exports = connectDB