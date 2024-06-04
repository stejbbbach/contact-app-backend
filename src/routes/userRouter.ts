import { Router } from 'express';
import {
    createUser,
    createManyUsers,
    getAllUsers,
    getUserById,
    updateUser,
    updateManyUsers,
    partialUpdateUser,
    partialUpdateManyUsers,
    deleteUser,
    deleteManyUsers,
    deleteAllUsers,
} from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.post('/bulk', createManyUsers);
router.get('/', getAllUsers);
router.get('/:uid', getUserById);
router.put('/:uid', updateUser);
router.put('/', updateManyUsers);
router.patch('/:uid', partialUpdateUser);
router.patch('/', partialUpdateManyUsers);
router.delete('/:uid', deleteUser);
router.delete('/', deleteManyUsers);
router.delete('/all', deleteAllUsers);

export default router;
