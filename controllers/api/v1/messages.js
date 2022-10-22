//require model
const Message = require('./../../../models/message');
//require mongoose
const mongoose = require('mongoose');


const getAll = (req, res) => {
    let messages = Message.find({}, (err, messages) => {
        if (err) {
            let result = {
                status: "error",
                message: "Error getting messages",
         };
         res.json(result);
        } else {
            let result = {
                status: "success",
                data: {
                    messages: messages,
                }
            }
            res.json(result);
        }
    })
}

const getId = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING message with id 1",
        "data": {
            "messages": [{
                "user": "John",
                "message": "Hello"
            }
            ]
        }
    })
}

const create = (req, res ) => {
    let message = new Message();
    message.user = "John";
    message.message = "Hello";
    message.save((err) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": message
                }
            })
        }
    })
}

const update = (req, res) => {
    res.json({
        "status": "success",
        "message": "UPDATING message with id 1",
        "data": {
            "messages": [{
                "user": "John",
                "message": "Correcting my message"
            }
            ]
        }
    })
}

const remove = (req, res) => {
    res.json({
        "status": "success",
        "message": "DELETING message with id 1",
        "data": {
            "messages": [{
                "message": "Message deleted"
            }
            ]
        }
    })
}

module.exports.getAll = getAll
module.exports.getId = getId
module.exports.create = create
module.exports.update = update
module.exports.remove = remove