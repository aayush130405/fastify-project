const Thumbnail = require("../models/thumbnail.js")
const path = require("path")
const fs = require("fs")
const {pipeline} = require("stream")

const util = require("util")
const pipelineAsync = util.promisify(pipeline)

exports.createThumbnail = async (request, reply) => {
    try {
        const parts = request.part()            //gets both file and field
        let fields = {}
        let filename;

        for await (const part of parts) {
            if(part.file) {
                const filename = `${Date.now()}-${part.filename}`
                const saveTo = path.join(
                    __dirname, "..", "uploads", "thumbnails", filename
                ) 
            } else {
                fields[part.filename] = part.value
            } 
        }
    } catch (err) {
        reply.send(err)
    }
}