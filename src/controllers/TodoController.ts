import { NextFunction, Request, Response } from 'express'

import TodoService from '../services/TodoService'
import { TodoData } from '../types/Todo'

class TodoController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await TodoService.getAll()
      return res.status(200).json(todo)
    } catch (error) {
      next(error)
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await TodoService.getById(req.params.id)
      return res.status(200).json(todo)
    } catch (error) {
      next(error)
    }
  }

  static async store(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await TodoService.store(req.body as TodoData)
      return res.status(200).json(todo)
    } catch (error) {
      next(error)
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await TodoService.update(req.body as TodoData, req.params.id)
      return res.status(200).json(todo)
    } catch (error) {
      next(error)
    }
  }

  static async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await TodoService.destroy(req.params.id)
      return res.status(200).json(todo)
    } catch (error) {
      next(error)
    }
  }
}

export default TodoController
