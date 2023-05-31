import express from 'express'

const router = express.Router()

router.post('/webhook', async (req, res) => {
  console.log('req.body', res)

  res.send({ output: 'test', skillData: 'test' })
})

export default router
