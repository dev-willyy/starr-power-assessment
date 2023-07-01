import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js';

async function createHotel(req, res, next) {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
}

async function updateHotel(req, res, next) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
}

async function deleteHotel(req, res, next) {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted');
  } catch (err) {
    next(err);
  }
}

async function getHotel(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
}

async function getHotels(req, res, next) {
  const { min, max, limit, ...others } = req.query;

  try {
    const hotelsQuery = Hotel.find({ ...others, cheapestPrice: { $gt: min || 1, $lt: max || 999 } });

    if (limit) {
      hotelsQuery.limit(Number(limit));
    }

    const hotels = await hotelsQuery.exec();

    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
}

async function countByCity(req, res, next) {
  const cities = req.query.cities.split(',');

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
}

async function countByType(req, res, next) {
  // only 3 room types
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
    const cabinCount = await Hotel.countDocuments({ type: 'cabin' });
    const resortCount = await Hotel.countDocuments({ type: 'resort' });
    const apartmentCount = await Hotel.countDocuments({ type: 'apartment' });

    res.status(200).json([
      { type: 'total hotels', count: hotelCount },
      { type: 'cabin rooms', count: cabinCount },
      { type: 'resort rooms', count: resortCount },
      { type: 'apartment rooms', count: apartmentCount },
    ]);
  } catch (err) {
    next(err);
  }
}

async function getHotelRooms(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    return res.status(200).json(list);
  } catch (err) {
    next(err);
  }
}

export { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms };
