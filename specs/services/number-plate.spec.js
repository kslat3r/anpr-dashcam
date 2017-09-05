const expect = require('chai').expect;
const numberPlateService = require('../../services/number-plate');

describe('anpr service', function() {
  const testPlates = [
    'LR33TEE',
    'EY59YEV',
    'LL66MVK',
    'RK64AGY',
    'GV16YMW',
    'YX64WWF',
  ];

  it('should have the correct API signature', () => {
    expect(numberPlateService).to.be.an('object');
    expect(numberPlateService.getInfo).to.be.a('function');
  });

  it('should return info', (done) => {
    const promises = [];

    testPlates.forEach((testPlate) => {
      promises.push(numberPlateService.getInfo(testPlate));
    });

    Promise.all(promises)
      .then((results) => {
        console.log(results);

        return done();
      })
  });
});
