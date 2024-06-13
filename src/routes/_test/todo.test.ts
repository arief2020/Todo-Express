import request from 'supertest'

import app from '../../app'
import prisma from '../../models/prisma'

const BASE_URL = '/api/todo'

beforeAll(async () => {
  try {
    await prisma.todo.createMany({
      data: [
        { id: 1001, name: 'AAA', description: 'AAA', status: 'AAA' },
        { id: 1002, name: 'BBB', description: 'BBB', status: 'BBB' },
        { id: 1003, name: 'CCC', description: 'CCC', status: 'CCC' },
        { id: 1004, name: 'DDD', description: 'DDD', status: 'DDD' },
      ],
    })
  } catch (error) {
    console.log(error)
  }
})

afterAll(async () => {
  try {
    await prisma.todo.deleteMany({})
  } catch (error) {
    console.log(error)
  }
})

const createTodo = {
  name: 'EEE',
  description: 'EEE',
  status: 'EEE',
}
const updatedTodo = {
  name: 'new A',
  description: 'new A',
  status: 'new A',
}
describe('GET List todo /api/todo', () => {
  test('Get all data from list', async () => {
    const response = await request(app).get(BASE_URL)
    expect(response.status).toBe(200)
    expect(response.body.data.length).toEqual(4)
  })
  test('Get data by id', async () => {
    const response = await request(app).get(`${BASE_URL}/1001`)
    expect(response.status).toBe(200)
    expect(response.body.data.id).toEqual(1001)
  })
  test('create data', async () => {
    const response = await request(app).post(`${BASE_URL}`).send(createTodo)
    expect(response.status).toBe(200)
    expect(response.body.data.name).toBe('EEE')
  })
  test('POST todo bad request', (done) => {
    request(app)
      .post('/api/todo')
      .expect(400)
      .then((response) => {
        expect(response.body.message).toBe('name, description, and status are required')
        return done()
      })
      .catch((err) => {
        done(err)
      })
  })
  test('updated data by id', async () => {
    const response = await request(app).put(`${BASE_URL}/1001`).send(updatedTodo)
    expect(response.status).toBe(200)
    expect(response.body.data.id).toEqual(1001)
    expect(response.body.data.name).toBe('new A')
  })
  test('deleted data by id', async () => {
    const response = await request(app).delete(`${BASE_URL}/1001`)
    expect(response.status).toBe(200)
    expect(response.body.data.id).toEqual(1001)
  })
})
