module.exports = async function (req, res, next) {
    try {
        await req.validateSchema.validateAsync(req.body);
        next()
    } catch (error) {
        res.error(error.message)
    }
}