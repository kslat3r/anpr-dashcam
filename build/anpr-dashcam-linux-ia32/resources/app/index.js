const electron = require('electron')
const server = require('./server');

let mainWindow
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    kiosk: true,
  })

  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closed', () => {
    mainWindow = null
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

server();
