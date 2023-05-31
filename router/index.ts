import express from 'express'

const router = express.Router()

router.post('/webhook', (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: 'hello' })
  const test = () => {
    return { output: req.body }
  }
  return test()
})

export default router
