const expect = require('chai').expect;
const numberPlateService = require('../../services/number-plate');

describe('number-plate service', function() {
  const testPlates = [
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

  it('should return info', async () => {
    const results = await Promise.all(testPlates.map((testPlate) => {
      return numberPlateService.getInfo(testPlate);
    }));

    console.log(results);
  });
});
