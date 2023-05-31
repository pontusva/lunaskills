import express from 'express'
import {
  coordinate,
  deleteAllCoordinates,
  getCoordinates,
} from '../mongodb/controllers/mongoController'

const mongoRouter = express.Router()

mongoRouter.get('/webhook', getCoordinates)
mongoRouter.post('/coordinate', coordinate)
mongoRouter.delete('/coordinate', deleteAllCoordinates)

export default mongoRouter
