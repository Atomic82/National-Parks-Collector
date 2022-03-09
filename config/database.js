import mongoose from 'mongoose'
import { Router } from 'express'

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)

// database connection event
db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})



const router = Router()

export {
  router
}