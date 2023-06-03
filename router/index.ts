import express from 'express'
import { writeNoteToDb } from '../skills/skills'

const router = express.Router()

router.post('/webhook', async (req, res) => {
  if (req.body.behaviour.name === 'note') {
    writeNoteToDb(req, res)
    console.log('inside notes', req.body)
  }
})

export default router
