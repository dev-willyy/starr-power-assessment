import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/userController.js';
import { verifyIsAdmin, verifyUser } from '../utilities/verifyToken.js';

const router = express.Router();

// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyIsAdmin, getUsers);

export default router;
