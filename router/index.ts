import express from 'express'

const router = express.Router()

router.post('/webhook', async (req, res) => {
  console.log('req.body', res)
  function webhook() {
    return { output: 'test', skillData: 'test' }
  }
  webhook()
  res.status(200).json({ message: 'success' })
})

export default router
