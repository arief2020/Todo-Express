import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'

import router from './routes'

const envFilePath = path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
dotenv.config({ path: envFilePath })

const app: Application = express()
// const port = process.env.PORT || 3000

app.use('/', router)

// app.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Server is running at http://localhost:${port}`)
// })

export default app
