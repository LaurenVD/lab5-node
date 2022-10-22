//require the mongoose module
const mongoose = require('mongoose');
//define Schema variable
const Schema = mongoose.Schema;

//define message schema
const messageSchema = new Schema({
    user: { type: String, required: false },
    message: { type: String, required: true },
});

//define message model
const Message = mongoose.model('Message', messageSchema);

//export message model
module.exports = Message;