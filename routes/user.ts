import { Router } from 'express';
import { check } from 'express-validator'
import checkParams from '../middlewares/check-params';
import { deleteUser, getUser, getUsers, postUser, updateUser } from '../controllers/user';


const router = Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', [
    check('name', 'Name is required'),
    check('email', 'Email is required'),
    checkParams
], postUser);

router.put('/:id', [
    check('name', 'Name is required'),
    checkParams
], updateUser);

router.delete('/:id', deleteUser);


export default router;