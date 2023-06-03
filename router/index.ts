import express from 'express'
import { writeNoteToDb, readNoteFromDb } from '../skills/skills'

const router = express.Router()

router.post('/webhook', async (req, res) => {
  if (req.body.behaviour.name === 'note') {
    writeNoteToDb(req, res)
    console.log('inside notes', req.body)
  } else if (req.body.behaviour.name === 'readNote') {
    readNoteFromDb(req, res)
    console.log('inside readNote', req)
  }
  console.log('test')
})

export default router
