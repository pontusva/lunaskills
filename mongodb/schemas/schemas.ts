import mongoose from 'mongoose'

export const Note = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
})
