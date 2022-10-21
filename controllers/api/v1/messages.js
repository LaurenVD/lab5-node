//require model
const Message = require('./../../../models/message');

const getAll = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING messages",
        "data": {
            "messages": [{
                "user": "John",
                "message": "Hello"
            },
            {
                "user": "Jane",
                "message": "Hi"
            }
            ]
        }
    })
}

const getId = (req, res) => {
    res.send("Hello World")
    }

const create = (req, res) => {
    res.send("Hello World")
    }

const update = (req, res) => {
    res.send("Hello World")
    }

const remove = (req, res) => {
    res.send("Hello World")
    }

module.exports.getAll = getAll
module.exports.getId = getId
module.exports.create = create
module.exports.update = update
module.exports.remove = remove