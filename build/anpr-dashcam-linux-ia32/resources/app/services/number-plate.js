const Promise = require('bluebird');
const ukNumberPlates = Promise.promisifyAll(require('uk-numberplates'));

module.exports = {
  getInfo: async (numberPlate) => {
    let result;

    try {
      result = await ukNumberPlates.validateAsync(numberPlate);
    } catch (e) {
      throw new Error(`Number plate ${numberPlate} not valid`);
    }

    return result;
  },
};
