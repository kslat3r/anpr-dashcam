const anprService = require('../services/anpr');
const cacheService = require('../services/cache');
const numberPlateService = require('../services/number-plate');
const dvlaService = require('../services/dvla');

module.exports = async () => {
  let numberPlate;

  try {
    numberPlate = await anprService.getNumberPlate(`${__dirname}/../specs/data/anpr/4.png`);
  } catch (e) {
    throw e;
  }

  const cacheKey = `VEHICLE_${numberPlate}`;
  const cached = cacheService.get(cacheKey);

  if (cached) {
    return cached;
  }

  let numberPlateDetails;

  try {
    numberPlateDetails = await numberPlateService.getInfo(numberPlate);
  } catch (e) {
    throw e;
  }

  let dvlaDetails;

  try {
    dvlaDetails = await dvlaService.getInfo(numberPlate);
  } catch (e) {
    throw e;
  }

  let model;

  try {
    model = await dvlaService.getModel(numberPlate);
  } catch (e) {
    throw e;
  }

  const vehicle = {
    numberPlate,
    numberPlateDetails,
    dvlaDetails,
    model,
  };

  cacheService.set(cacheKey, vehicle);

  return vehicle;
};
