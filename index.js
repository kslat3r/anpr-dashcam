const anprService = require('./services/anpr');
const numberPlateService = require('./services/number-plate');
const dvlaService = require('./services/dvla');

const main = async () => {
  let numberPlate;

  try {
    numberPlate = await anprService.getNumberPlate(`${__dirname}/specs/data/anpr/4.png`);
  } catch (e) {
    console.log(e);

    process.exit(1);
  }

  let numberPlateDetails;

  try {
    numberPlateDetails = await numberPlateService.getInfo(numberPlate);
  } catch (e) {
    console.log(e);

    process.exit(1);
  }

  let dvlaDetails;

  try {
    dvlaDetails = await dvlaService.getInfo(numberPlate);
  } catch (e) {
    console.log(e);

    process.exit(1);
  }

  let model;

  try {
    model = await dvlaService.getModel(numberPlate);
  } catch (e) {
    console.log(e);

    process.exit(1);
  }

  console.log({
    numberPlate,
    numberPlateDetails,
    dvlaDetails,
    model,
  });

  process.exit(0);
};

main();
