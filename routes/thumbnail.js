const thumbnail = require("../controllers/thumbnailController.js")

module.exports = async function (fastify, opts) {
    fastify.register(async function (fastify) {
        fastify.addHook("preHandler", fastify.authenticate)

        fastify.post("/", thumbnail.createThumbnail)
        fastify.get("/", thumbnail.getThumbnail)
        fastify.get("/:id", thumbnail.getThumbnailById)
        fastify.put("/:id", thumbnail.updateThumbnail)
        fastify.delete("/:id", thumbnail.deleteThumbnail)
        fastify.delete("/", thumbnail.deleteAllThumbnails)
        
    })
}