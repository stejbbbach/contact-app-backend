import { Router } from 'express';
import {
    createUserController,
    deleteUserController,
    getUserByIdController,
    getUsersController,
    updateUserController,
} from '../controllers/users.controllers';
import { validateUser } from '../utils/validators/users.validators';

const router = Router();

router.get('/', getUsersController);
router.get('/:id', getUserByIdController);
router.post('/', validateUser, createUserController);
router.put('/:id', validateUser, updateUserController);
router.delete('/:id', deleteUserController);

export default router;
