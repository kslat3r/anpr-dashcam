const ukNumberPlates = require('uk-numberplates');

module.exports = {
  getInfo: (numberPlate) => {
    return new Promise((resolve, reject) => {
      ukNumberPlates.validate(numberPlate, (err, result) => {
        if (err) {
          return reject(`Number plate ${numberPlate} not valid`);
        }

        return resolve(result);
      });
    });
  },
}
