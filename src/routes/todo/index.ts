import { Router } from 'express'

import TodoController from '../../controllers/TodoController'

const router = Router()

router.get('/', TodoController.getAll)
router.get('/:id', TodoController.getById)
router.post('/', TodoController.store)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.destroy)

export default router
