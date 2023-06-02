import express from 'express'
import { CoordinateModel } from '../mongodb/models/coordinateModel'
import { writeNoteToDb } from '../skills/skills'

const router = express.Router()

router.post('/webhook', async (req, res) => {
  if (req.body.behaviour === 'notes') {
    writeNoteToDb(req, res)
    console.log('inside notes', req.body)
  }

  // try {
  //   const coordinates = await CoordinateModel.find({})
  //   res.send({ output: coordinates[0].coordinates })
  // } catch (error) {
  //   console.log(error)
  // }
})

export default router

// try {
//   const coordinates = await CoordinateModel.find({})
//   console.log(coordinates)
//   res.status(200).json({ coordinates })
//   return { output: 'coordinates' }
// } catch (error) {
//   console.log(error)
// }
