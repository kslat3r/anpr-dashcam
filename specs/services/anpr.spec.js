const fs = require('fs');
const expect = require('chai').expect;
const anprService = require('../../services/anpr');

describe('anpr service', function() {
  let filePaths = [];

  beforeEach(() => {
    const filePath = `${__dirname}/../data/anpr`;

    filePaths = fs.readdirSync(filePath).map(fileName => `${filePath}/${fileName}`);
  });

  it('should have the correct API signature', () => {
    expect(anprService).to.be.an('object');
    expect(anprService.getNumberPlate).to.be.a('function');
  });

  it('should recognise number plates correctly', async () => {
    const results = await Promise.all(filePaths.map((filePath) => {
      return anprService.getNumberPlate(filePath);
    }));

    console.log(results);
  });
});
