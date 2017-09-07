const anprService = require('../services/anpr');
const cacheService = require('../services/cache');
const numberPlateService = require('../services/number-plate');
const dvlaService = require('../services/dvla');

module.exports = async (filePath) => {
  let vehicle = {};

  try {
    vehicle.numberPlate = await anprService.getNumberPlate(filePath);
  } catch (e) {
    // empty block
  }

  if (numberPlate) {
    const cacheKey = `VEHICLE_${vehicle.numberPlate}`;
    const cached = cacheService.get(cacheKey);

    if (cached) {
      return cached;
    }

    try {
      vehicle.numberPlateDetails = await numberPlateService.getInfo(vehicle.numberPlate);
    } catch (e) {
      // empty block
    }

    try {
      vehicle.dvlaDetails = await dvlaService.getInfo(vehicle.numberPlate);
    } catch (e) {
      // empty block
    }

    try {
      vehicle.model = await dvlaService.getModel(vehicle.numberPlate);
    } catch (e) {
      // empty block
    }

    if (vehicle.numberPlateDetails && vehicle.dvlaDetails && vehicle.model) {
      cacheService.set(cacheKey, vehicle);
    }
  }

  return vehicle;
};
