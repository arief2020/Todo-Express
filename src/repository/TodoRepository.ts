import prisma from '../models/prisma'
import { TodoData } from '../types/Todo'

class TodoRepository {
  static async getAll() {
    try {
      const todo = await prisma.todo.findMany()
      return todo
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async getById(id: number) {
    try {
      const todo = await prisma.todo.findUnique({
        where: {
          id,
        },
      })
      return todo
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async store(data: TodoData) {
    try {
      const todo = await prisma.todo.create({ data })
      return todo
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async update(data: TodoData, id: number) {
    try {
      const todo = await prisma.todo.update({
        where: {
          id,
        },
        data,
      })
      return todo
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async destroy(id: number) {
    try {
      const todo = await prisma.todo.delete({
        where: {
          id,
        },
      })
      return todo
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default TodoRepository
