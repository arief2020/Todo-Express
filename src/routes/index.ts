import { Router, Request, Response } from 'express'

const router = Router()

router.get('/api/hello', (req: Request, res: Response) => {
  res.status(200).send('Hello, World!')
})

export default router
