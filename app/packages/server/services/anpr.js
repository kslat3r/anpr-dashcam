const exec = require('child_process').exec;

const identifyLicense = (filePath) => new Promise((resolve, reject) => {
  exec(`alpr -c eu -j ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      return reject(err);
    }

    if (stderr) {
      return reject(JSON.parse(stderr));
    }

    return resolve(JSON.parse(stdout));
  })
});

module.exports = {
  getNumberPlate: async (filePath) => {
    let out;

    try {
      out = await identifyLicense(filePath);
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
