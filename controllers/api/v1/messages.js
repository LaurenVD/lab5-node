//require model
const Message = require('./../../../models/message');
//require mongoose
const mongoose = require('mongoose');


const getAll = (req, res) => {
    let messages = Message.find({}, (err, messages) => {
            let result = {
                status: "success",
                data: {
                    messages: messages,
                }
            }
            res.json(result);
        });
    };

const getId = (req, res) => {
    const id = req.params.id;
    let result = {
        status: "success",
        message: `GETTING message with id ${id}`,
        data: {
            messages: [
                {
                    "user" : "Lauren",
                    "message" : "It's just me"
                }
            ]
        }
    };
    res.json(result);
};

const create = (req, res ) => {
    let message = new Message();
    message.user = req.body.user;
    message.message = req.body.message;
    message.save((err) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    message: message
                }
            })
        }
    })
}

const update = (req, res) => {
    // update message
    const id = req.params.id;
    let result = {
        status: "success",
        message: `UPDATING message with id ${id}`,
        data: {
            messages: [
                {
                    "user" : req.body.user,
                    "message" : req.body.message
                }
            ]
        }
    };
    res.json(result);
};

const remove = (req, res) => {
    // remove message
    const id = req.params.id;
    let result = {
        status: "success",
        message: `DELETING message with id ${id}`,
        data: {
            messages: [
                {
                    "message" : "Message is deleted"
                }
            ]
        }
    };
    res.json(result);
};

module.exports.getAll = getAll
module.exports.getId = getId
module.exports.create = create
module.exports.update = update
module.exports.remove = remove