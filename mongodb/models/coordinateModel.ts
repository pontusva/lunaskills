import mongoose from 'mongoose'
import { CoordinateSchema } from '../schemas/coordinates'

export const CoordinateModel = mongoose.model('Coordinate', CoordinateSchema)
