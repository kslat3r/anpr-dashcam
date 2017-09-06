const RaspiCam = require('raspicam');

const camera = new RaspiCam({
  mode: 'timelapse',
  output: `${__dirname}/photo.jpg`,
  width: 2048,
  height: 1536,
  quality: 100,
  rotation: 270,
  nopreview: true,
  timelapse: 10000,
  timeout: 999999999999,
});

camera.start();

camera.on('read', (err, timestamp, filename) => {
  console.log(filename);
});
