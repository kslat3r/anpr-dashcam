const Promise = require('bluebird');
const anpr = Promise.promisifyAll(require('node-openalpr'));

module.exports = {
  getNumberPlate: async (filePath) => {
    anpr.Start(null, null, null, null, 'eu');

    let out;

    try {
      out = await anpr.IdentifyLicenseAsync(filePath);
    } catch (e) {
      throw e;
    }

    if (!out.results.length) {
      throw new Error('Number plate not found');
    }

    const plate = out.results[0].plate;
    let parts = plate.split('');

    parts = parts.map((part) => {
      if (part === 'I') {
        return '1';
      }

      if (part === 'Q') {
        return 'O';
      }

      return part;
    });

    return parts.join('');
  },
}
