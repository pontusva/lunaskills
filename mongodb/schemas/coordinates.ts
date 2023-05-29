import mongoose from 'mongoose'

export const CoordinateSchema = new mongoose.Schema({
  coordinates: {
    type: String,
    required: true,
  },
})
