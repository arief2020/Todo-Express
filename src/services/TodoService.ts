import TodoRepository from '../repository/TodoRepository'
import { TodoData } from '../types/Todo'

class TodoService {
  static async getAll() {
    try {
      const todo = await TodoRepository.getAll()
      return { data: todo }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async getById(id: string) {
    try {
      const todo = await TodoRepository.getById(+id)
      return { data: todo }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async store(body: TodoData) {
    try {
      const data = this.prepareData(body)
      const todo = await TodoRepository.store(data)
      return { data: todo }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async update(body: TodoData, id: string) {
    try {
      const data = this.prepareData(body)
      const todo = await TodoRepository.update(data, +id)
      return { data: todo }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async destroy(id: string) {
    try {
      const todo = await TodoRepository.destroy(+id)
      return { data: todo }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  private static prepareData(body: TodoData) {
    const { name, description, status } = body
    return { name, description, status }
  }
}

export default TodoService
