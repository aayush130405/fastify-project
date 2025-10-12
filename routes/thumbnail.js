const thumbnail = require("../controllers/thumbnailController.js")

module.exports = async function (fastify, opts) {
    fastify.register(async function (fastify) {
        fastify.addHook("preHandler", fastify.authenticate)

        fastify.post("/", thumbnail.createThumbnail)
    })
}