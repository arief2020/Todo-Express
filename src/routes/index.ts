import { Router, Request, Response } from 'express'

import todoRouter from './todo'

const router = Router()

router.get('/api/hello', (req: Request, res: Response) => {
  res.status(200).send('Hello, World!')
})

router.use('/api/todo', todoRouter)

export default router
