import { NotesModel } from '../mongodb/models/models'
import { Request, Response } from 'express'

export const writeNoteToDb = async (req: Request, res: Response) => {
  try {
    const createNote = await NotesModel.create({
      note: req.body.input,
    })
    res.send({
      output:
        'I understand your request and will update the database accordingly. Is there anything else I can help you with?',
    })
    // return res.status(200).json({ createNote })
  } catch (error) {
    console.log(error)
  }
}

export const readNoteFromDb = async (req: Request, res: Response) => {
  try {
    const readNote = await NotesModel.find().sort({ _id: -1 }).limit(3)
    res.json({
      output:
        'What do you think of these notes? ' +
        readNote.map((note) => note.note).join(' '),
    })
  } catch (error) {
    console.log(error)
  }
}

export const analyzeNotes = async (req: Request, res: Response) => {
  console.log('inside analyze notes', req.body.input)

  res.status(200).json({ done: 'done' })
}
