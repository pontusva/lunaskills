import express from 'express'
import { writeNoteToDb, readNoteFromDb, analyzeNotes } from '../skills/skills'

const router = express.Router()

router.post('/webhook', async (req, res) => {
  if (req.body.behaviour.name === 'note') {
    writeNoteToDb(req, res)
    console.log('inside notes', req.body)
  } else if (req.body.behaviour.name === 'readNote') {
    readNoteFromDb(req, res)
  } else if (req.body.behaviour.name === 'analyze') {
    analyzeNotes(req, res)
  }

  console.log('test')
})

export default router
