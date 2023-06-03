import express from 'express'
import router from './router'
import connectDB from './mongodb/connections'

const app = express()
const port = 8080

app.use(express.json())
app.use('/', router)

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })
})
