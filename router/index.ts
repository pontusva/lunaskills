import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  console.log(req)
  return { output: 'hello' }
})

export default router
