import express from 'express';
import { verifyIsAdmin } from '../utilities/verifyToken.js';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/roomController.js';

const router = express.Router();

// CREATE
router.post('/:hotelid', verifyIsAdmin, createRoom);

// UPDATE
router.put('/:id', verifyIsAdmin, updateRoom);

// DELETE
router.delete('/:id/:hotelid', verifyIsAdmin, deleteRoom);

// GET
router.get('/:id', getRoom);

// GET ALL
router.get('/', getRooms);

export default router;
