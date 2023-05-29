import express from 'express'
import {
  coordinate,
  deleteAllCoordinates,
} from '../mongodb/controllers/mongoController'

const mongoRouter = express.Router()

mongoRouter.post('/coordinate', coordinate)
mongoRouter.delete('/coordinate', deleteAllCoordinates)

export default mongoRouter
