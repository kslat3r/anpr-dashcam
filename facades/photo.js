const fs = require('fs');
const cameraService = require('../services/camera');
const clientsService = require('../services/clients');
const events = require('../constants/events');
const vehicleFacade = require('./vehicle');

module.exports = () => {
  let method = 'startTimelapse';

  if (process.env.MOCK) {
    method = 'startTimelapseMock';
  }

  cameraService[method]((filePath) => {
    // send image to clients

    const fileData = fs.readFileSync(filePath);
    const fileDataBase64 = fileData.toString('base64');

    clientsService.emit(events.IMAGE_SEND, fileDataBase64);

    // run vehicle facade

    vehicleFacade(filePath);
  });
};
