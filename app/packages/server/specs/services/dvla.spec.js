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
    expect(dvlaService.getModel).to.be.a('function');
  });

  it('should return info', async () => {
    const results = await Promise.all(testPlates.map((testPlate) => {
      return dvlaService.getInfo(testPlate);
    }));

    console.log(results);
  }).timeout(20000);

  it('should return model', async () => {
    const results = await Promise.all(testPlates.map((testPlate) => {
      return dvlaService.getModel(testPlate);
    }));

    console.log(results);
  }).timeout(20000);
});
