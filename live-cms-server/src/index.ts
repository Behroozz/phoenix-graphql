import { app } from './app'
import mongoose from 'mongoose'

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWY_KEY must be defined.')
  }
  try {
    await mongoose.connect('mongodb://server-mongo-srv:27017/auth')
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
  }

  app.listen(3000, () => {
    console.log('Server listening on port 3000')
  })
}

start()
