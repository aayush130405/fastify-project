require("dotenv").config()
const path = require("path")
const fastifyEnv = require("@fastify/env")
const fastify = require("fastify")({logger: true})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

const start = async () => {
    try {
        await fastify.listen({port: process.env.PORT})
        fastify.log.info(`Server is running at http://localhost:${process.env.PORT}`)
    } catch (err) {
        fastify.log.error(err)
    }
}

start()