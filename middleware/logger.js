const logger = (req, res, next) => {
    console.log("Wow, yes!")
    next()
}

module.exports = logger