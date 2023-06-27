import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utilities/error.js';

async function createRoom(req, res, next) {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
}

async function updateRoom(req, res, next) {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
}

async function deleteRoom(req, res, next) {
  const hotelId = req.params.hotelid;

  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } });
    } catch (err) {
      next(err);
    }
    res.status(200).json('Room has been deleted');
  } catch (err) {
    next(err);
  }
}

async function getRoom(req, res, next) {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
}

async function getRooms(req, res, next) {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
}

export { createRoom, updateRoom, deleteRoom, getRoom, getRooms };