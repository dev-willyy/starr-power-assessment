import Hotel from '../models/Hotel.js';

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

// async function getHotels(req, res, next) {
//   try {
//     const hotels = await Hotel.find(req.query).limit(req.query.limit);
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// }
async function getHotels(req, res, next) {
  try {
    const hotels = await Hotel.find(req.query).limit(parseInt(req.query.limit));
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
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
    const cabinCount = await Hotel.countDocuments({ type: 'cabin' });
    const resortCount = await Hotel.countDocuments({ type: 'resort' });
    const apartmentCount = await Hotel.countDocuments({ type: 'apartment' });
    // const villaCount = await Hotel.countDocuments({ type: 'villa' });

    res.status(200).json([
      { type: 'hotels', count: hotelCount },
      { type: 'cabins', count: cabinCount },
      { type: 'resorts', count: resortCount },
      { type: 'apartments', count: apartmentCount },
      // { type: 'villas', count: villaCount },
    ]);
  } catch (err) {
    next(err);
  }
}

export { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType };
