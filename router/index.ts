import express from 'express'

const router = express.Router()

router.post('/webhook', async (req, res) => {
  console.log('req.body', req)
  // res.status(200).json({ message: 'success' })
  return { output: 'yayy' }
})

export default router
