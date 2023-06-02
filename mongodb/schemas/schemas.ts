import mongoose from 'mongoose'

export const Note = new mongoose.Schema({
  note: {
    type: String,
    required: true,
  },
})
