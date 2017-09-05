const anprService = require('./services/anpr');
const numberPlateService = require('./services/number-plate');
const dvlaService = require('./services/dvla');

let numberPlate;
let numberPlateDetails;
let dvlaDetails;

anprService.getNumberPlate(`${__dirname}/specs/data/anpr/4.png`)
  .then((_numberPlate) => {
    numberPlate = _numberPlate;

    return numberPlateService.getInfo(numberPlate);
  })
  .then((_numberPlateDetails) => {
    numberPlateDetails = _numberPlateDetails;

    return dvlaService.getInfo(numberPlate);
  })
  .then((_dvlaDetails) => {
    dvlaDetails = _dvlaDetails;

    return dvlaService.getModel(numberPlate);
  })
  .then((model) => {
    console.log({
      numberPlate,
      numberPlateDetails,
      dvlaDetails,
      model,
    });

    process.exit(0);
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });

