import { Request, Response, NextFunction } from 'express'

interface CustomError extends Error {
  name: string
  message: string
}

const errorHandler = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  if (err.name === 'BadRequest') {
    return res.status(400).json({ message: err.message })
  }
  if (err.name === 'ErrorNotFound') {
    return res.status(404).json({ message: err.message })
  }

  return res.status(500).json({ message: 'Internal Server Error' })
}

export default errorHandler
