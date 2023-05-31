import { Request, Response } from 'express'
import { CoordinateModel } from '../models/coordinateModel'

export const getCoordinates = async (req: Request, res: Response) => {
  try {
    const coordinates = await CoordinateModel.find({})
    console.log(coordinates)
    res.status(200).json({ coordinates })
    return { output: 'coordinates' }
  } catch (error) {
    console.log(error)
  }
}

export const coordinate = async (req: Request, res: Response) => {
  const { coordinates } = req.body
  try {
    const createCoordinate = await CoordinateModel.create({
      coordinates,
    })
    res.status(200).json({ createCoordinate })
  } catch (error) {
    console.log(error)
  }
}

export const deleteAllCoordinates = async (req: Request, res: Response) => {
  try {
    const deleteCoordinates = await CoordinateModel.deleteMany({})
    res.status(200).json({ deleteCoordinates })
  } catch (error) {
    console.error(error)
  }
}
