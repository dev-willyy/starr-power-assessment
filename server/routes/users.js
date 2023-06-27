import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/userController.js';
import { verifyIsAdmin, verifyToken, verifyUser } from '../utilities/verifyToken.js';

const router = express.Router();

// CHECK AUTHENTICATION
// router.get('/check-auth', verifyToken, (req, res, next) => {
// res.send('hello user, you are signed in');
// });

// CHECK AUTHORIZATION
// router.get('/check-user/:id', verifyUser, (req, res, next) => {
// res.send('hello user, you are signed in and you can delete account');
// });

// CHECK ADMIN
// router.get('/check-admin/:id', verifyIsAdmin, (req, res, next) => {
// res.send('hello admin, you are signed in and you can delete all accounts');
// });

// CREATE
// router.post('/', createUser);

// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyIsAdmin, getUsers);

export default router;
