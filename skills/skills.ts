import { NotesModel } from '../mongodb/models/models'
import { Request, Response } from 'express'

export const writeNoteToDb = async (req: Request, res: Response) => {
  try {
    const createNote = await NotesModel.create({
      note: req.body.input,
    })
    res.send({ output: 'Your note has been added to the database!' })
    res.status(200).json({ createNote })
  } catch (error) {
    console.log(error)
  }
}
