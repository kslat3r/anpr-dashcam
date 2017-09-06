const request = require('request-promise');
const cheerio = require('cheerio');

const confirmUrl = 'https://vehicleenquiry.service.gov.uk/ConfirmVehicle'
const viewUrl = 'https://vehicleenquiry.service.gov.uk/ViewVehicle';

const checkMotUrl = 'https://www.check-mot.service.gov.uk/';

module.exports = {
  getInfo: async (numberPlate) => {
    let html;

    try {
      html = await request.post(confirmUrl).form({
        Vrm: numberPlate,
      });
    } catch (e) {
      throw e;
    }

    let $ = cheerio.load(html);

    const viewState = $('input#viewstate').val();
    const make = $('input#Make').val();
    const colour = $('input#Colour').val();

    if (!viewState || !make || !colour) {
      throw new Error(`Missing required vehicle parameter for ${numberPlate}`);
    }

    try {
      html = await request.post(viewUrl).form({
        Vrm: numberPlate,
        viewstate: viewState,
        Make: make,
        Colour: colour,
        Correct: 'True',
      });
    } catch (e) {
      throw e;
    }

    $ = cheerio.load(html);

    return {
      taxed: $('#content > div.status-bar > div:nth-child(1) > div.isValid').length === 1 ? true : false,
      taxDue: $('#content > div.status-bar > div:nth-child(1) > div > p > strong').text().split(':')[1],
      mot: $('#content > div.status-bar > div:nth-child(2) > div.isValid').length === 1 ? true : false,
      motExpires: $('#content > div.status-bar > div:nth-child(2) > div > p > strong').text().split(':')[1],
      make,
      dateOfRegistration: $('#UKRegistrationDateDummyDateV5CMatch > span:nth-child(2) > strong').text(),
      yearOfManufacture: $('#content > div.column-two-thirds.margin-top-1 > ul > li:nth-child(3) > span:nth-child(2) > strong').text(),
      cylinderCapacity: $('#CylinderCapacity > span:nth-child(2) > strong').text(),
      co2Emissions: $('#CO2EmissionShown').text(),
      fuelType: $('#FuelTypeShown').text(),
      exportMarker: $('#content > div.column-two-thirds.margin-top-1 > ul > li:nth-child(7) > span:nth-child(2) > strong').text(),
      vehicleStatus: $('#content > div.column-two-thirds.margin-top-1 > ul > li:nth-child(8) > span:nth-child(2) > strong').text(),
      colour,
      vehicleTypeApproval: $('#content > div.column-two-thirds.margin-top-1 > ul > li:nth-child(10) > span:nth-child(2) > strong').text(),
      wheelplan: $('#content > div.column-two-thirds.margin-top-1 > ul > li:nth-child(11) > span:nth-child(2) > strong').text(),
      revenueWeight: $('#content > div.column-two-thirds.margin-top-1 > ul > li:nth-child(12) > span:nth-child(2) > strong').text(),
    };
  },

  getModel: async (numberPlate) => {
    let html;

    try {
      html = await request.post(checkMotUrl).form({
        116764200936: numberPlate,
      });
    } catch (e) {
      throw e;
    }

    const $ = cheerio.load(html);

    return $('#content > h1').text().split(' ').pop();
  },
};
