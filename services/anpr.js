const anpr = require('node-openalpr');

module.exports = {
  getNumberPlate: (filePath) => {
    anpr.Start('eu');

    return new Promise((resolve, reject) => {
      return anpr.IdentifyLicense(filePath, (err, out) => {
        if (err) {
          return reject(err);
        }

        if (!out.results.length) {
          return resolve(false);
        }

        return resolve(out.results[0].plate);
      });
    });
  },
}
