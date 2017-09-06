const Promise = require('bluebird');
const anpr = Promise.promisifyAll(require('node-openalpr'));

module.exports = {
  getNumberPlate: async (filePath) => {
    anpr.Start('eu');

    let out;

    try {
      out = await anpr.IdentifyLicenseAsync(filePath);
    } catch (e) {
      throw e;
    }

    if (!out.results.length) {
      throw new Error('Number plate not found');
    }

    return out.results[0].plate;
  },
}
