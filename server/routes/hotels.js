import express from 'express';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from '../controllers/hotelController.js';
import { verifyIsAdmin } from '../utilities/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/', verifyIsAdmin, createHotel);

// UPDATE
router.put('/:id', verifyIsAdmin, updateHotel);

// DELETE
router.delete('/:id', verifyIsAdmin, deleteHotel);

// GET
router.get('/find/:id', getHotel);

// GET ALL
router.get('/', getHotels);
router.get('/countByCityName', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);

export default router;
