import mongoose from 'mongoose'
import { Note } from '../schemas/schemas'

export const NotesModel = mongoose.model('note', Note)
