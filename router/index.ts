import express from 'express'

const router = express.Router()

router.post('/webhook', (req, res) => {
  console.log(req)
  return { output: 'hello' }
})

export default router
