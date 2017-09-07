const anprService = require('../services/anpr');
const cacheService = require('../services/cache');
const numberPlateService = require('../services/number-plate');
const dvlaService = require('../services/dvla');
const clientsService = require('../services/clients');
const events = require('../constants/events');

module.exports = async (filePath) => {
  let vehicle = {};

  try {
    vehicle.numberPlate = await anprService.getNumberPlate(filePath);
  } catch (e) {
    // empty block
  }

  if (vehicle.numberPlate) {
    const cacheKey = `VEHICLE_${vehicle.numberPlate}`;
    const cachedVehicle = cacheService.get(cacheKey);

    // if (cachedVehicle) {
    //   vehicle = cachedVehicle;
    // } else {
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

      // save in cache

      cacheService.set(cacheKey, vehicle);
    }
  // }

  clientsService.emit(events.DETAILS_SEND, vehicle);
};
