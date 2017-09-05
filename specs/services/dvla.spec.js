const expect = require('chai').expect;
const dvlaService = require('../../services/dvla');

describe('dvla service', function() {
  const testPlates = [
    // 'LR33TEE',
    'EY59YEV',
    'LL66MVK',
    'RK64AGY',
    'GV16YMW',
    'YX64WWF',
  ];

  it('should have the correct API signature', () => {
    expect(dvlaService).to.be.an('object');
    expect(dvlaService.getInfo).to.be.a('function');
    expect(dvlaService.getMakeAndModel).to.be.a('function');
  });

  it('should return info', (done) => {
    const promises = [];

    testPlates.forEach((testPlate) => {
      promises.push(dvlaService.getInfo(testPlate));
    });

    Promise.all(promises)
      .then((results) => {
        console.log(results);

        return done();
      });
  }).timeout(20000);

  it('should return make/model', (done) => {
    const promises = [];

    testPlates.forEach((testPlate) => {
      promises.push(dvlaService.getMakeAndModel(testPlate));
    });

    Promise.all(promises)
      .then((results) => {
        console.log(results);

        return done();
      });
  }).timeout(20000);
});
