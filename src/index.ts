import express, { Application } from 'express'
import dotenv from 'dotenv'

import router from './routes'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 3000

app.use('/', router)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${port}`)
})
