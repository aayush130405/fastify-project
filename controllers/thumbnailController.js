const Thumbnail = require("../models/thumbnail.js")
const path = require("path")
const fs = require("fs")
const {pipeline} = require("stream")

const util = require("util")
const pipelineAsync = util.promisify(pipeline)

exports.createThumbnail = async (request, reply) => {
    try {
        const parts = request.part()            //gets both file and field
    } catch (err) {
        reply.send(err)
    }
}