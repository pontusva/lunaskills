import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const lunadbURI = process.env.LUNA_DB

if (!lunadbURI) throw new Error('LUNA not found')

const connectDB = async () => {
  mongoose.connect(lunadbURI)
  console.log('connected to DB')
}

export default connectDB
