import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'

import router from './routes'

const envFilePath = path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
dotenv.config({ path: envFilePath })

const app: Application = express()
app.use(morgan('tiny'))

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(router)
app.use(morgan('tiny'))

export default app
