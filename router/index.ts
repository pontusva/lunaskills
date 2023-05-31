import express from 'express'

const router = express.Router()

router.post('/webhook', (req, res) => {
  console.log('req.body', req.body)
  // res.status(200).json({ message: 'success' })

  res.send({ output: req.body })
})

export default router
